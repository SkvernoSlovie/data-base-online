import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import theme from 'theme';
import _ from 'lodash';

import styled from 'styled-components';

import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Spacer from 'components/Spacer';
import Dropdown from 'components/Dropdown';
import InputField from 'components/InputField';
import Typography from 'components/Typography';
import SearchIcon from 'components/icons/SearchIcon';
import CloseIcon from 'components/icons/CloseIcon';

import MainSearch from './MainSearch';
import { DefaultFilters, Device, DeviceFilters, Sensor, SensorFilters, ViewType } from '../types';
import { useAppSelector } from 'hooks/redux';
import { stringify } from 'querystring';

interface MainSidebarFiltersProps {
  sensorData: Sensor[];
  filterSensorData: Sensor[];
  deviceData: Device[];
  filterDeviceData: Device[];
  isActive: boolean;
  isSensorSearchActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterSensorData: React.Dispatch<React.SetStateAction<Sensor[]>>;
  setFilterDeviceData: React.Dispatch<React.SetStateAction<Device[]>>;
}

const DROPDOWN_DEFAULT_VALUE = 'Не выбрано';

const DEFAULT_FILTERS: DefaultFilters = {
  measurement_error: null,
  measure_max: null,
  measure_min: null,
  unit_of_measuring: null,
  resource: null,
  lower_temperature_threshold: null,
  upper_temperature_threshold: null,
  temperature_unit: null,
  length: null,
  height: null,
  width: null,
  unit_of_length: null,
  weight: null,
  unit_of_weight: null,
  protection_class: null,
  power: null,
  measuring_channels: null,
};

const DEFAULT_SENSOR_FILTERS: SensorFilters = {
  type: DROPDOWN_DEFAULT_VALUE,
  operation_principle: DROPDOWN_DEFAULT_VALUE,
  manufacturing_technology: DROPDOWN_DEFAULT_VALUE,
  sensitive_element: DROPDOWN_DEFAULT_VALUE,
  output_signal: DROPDOWN_DEFAULT_VALUE,
  signal_conversation: DROPDOWN_DEFAULT_VALUE,
  measurable_value: DROPDOWN_DEFAULT_VALUE,
};

const DEFAULT_DEVICE_FILTERS: DeviceFilters = {
  type: DROPDOWN_DEFAULT_VALUE,
  operation_principle: DROPDOWN_DEFAULT_VALUE,
  manufacturing_technology: DROPDOWN_DEFAULT_VALUE,
  purpose: DROPDOWN_DEFAULT_VALUE,
  control_type: DROPDOWN_DEFAULT_VALUE,
  measure_show_type: DROPDOWN_DEFAULT_VALUE,
};

const MainSidebarFilters: React.FC<MainSidebarFiltersProps> = ({
  sensorData,
  filterSensorData,
  deviceData,
  filterDeviceData,
  isActive,
  isSensorSearchActive,
  setIsActive,
  setFilterSensorData,
  setFilterDeviceData,
}) => {
  const [generalFilters, setGeneralFilters] = useState<DefaultFilters>(DEFAULT_FILTERS);
  const [sensorFilters, setSensorFilters] = useState<SensorFilters>(DEFAULT_SENSOR_FILTERS);
  const [deviceFilters, setDeviceFilters] = useState<DeviceFilters>(DEFAULT_DEVICE_FILTERS);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSetFilters = () => {
    // const sensorType = sensorTypes.find((item) => item.name === sensorFilters.type);
    // const deviceType = types.find((item) => item.name === deviceFilters.type);

    // const operationPrinciple = operationPrinciples.find(
    //   (item) => item.name === sensorFilters.operation_principle,
    // );
    // const manufTech = manufTechs.find(
    //   (item) => item.name === sensorFilters.manufacturing_technology,
    // );
    // const sensetiveElement = sensetiveElements.find(
    //   (item) => item.name === sensorFilters.sensitive_element,
    // );
    // const outputSignal = outputSignals.find((item) => item.name === sensorFilters.output_signal);
    // const signalConversation = signalConversations.find(
    //   (item) => item.name === sensorFilters.signal_conversation,
    // );
    // const measurableValue = measurableValues.find(
    //   (item) => item.name === sensorFilters.measurable_value,
    // );
    // console.log(signalConversation);
    // const purpose = purposes.find((item) => item.name === deviceFilters.purpose);
    // const controlType = controlTypes.find((item) => item.name === deviceFilters.control_type);
    // const showType = showTypes.find((item) => item.name === deviceFilters.measure_show_type);

    // const sensors = ([] as Sensor[]).concat(
    //   manufTech ? manufTech.sensors : [],
    //   sensetiveElement ? sensetiveElement.sensors : [],
    //   operationPrinciple ? operationPrinciple.sensors : [],
    //   outputSignal ? outputSignal.sensors : [],
    //   sensorType ? sensorType.sensors : [],
    //   signalConversation ? signalConversation.sensors : [],
    //   measurableValue ? measurableValue.sensors : [],
    // );

    // const devices = ([] as Device[]).concat(
    //   manufTech ? manufTech.devices : [],
    //   operationPrinciple ? operationPrinciple.devices : [],
    //   deviceType ? deviceType.devices : [],
    //   purpose ? purpose.devices : [],
    //   controlType ? controlType.devices : [],
    //   showType ? showType.devices : [],
    // );

    const sensors = [] as Sensor[];

    const devices = [] as Device[];

    const filterWithouRepeatSensorsData =
      sensorFilters.type === DROPDOWN_DEFAULT_VALUE &&
      sensorFilters.operation_principle === DROPDOWN_DEFAULT_VALUE &&
      sensorFilters.manufacturing_technology === DROPDOWN_DEFAULT_VALUE &&
      sensorFilters.sensitive_element === DROPDOWN_DEFAULT_VALUE &&
      sensorFilters.signal_conversation === DROPDOWN_DEFAULT_VALUE &&
      sensorFilters.output_signal === DROPDOWN_DEFAULT_VALUE &&
      sensorFilters.measurable_value === DROPDOWN_DEFAULT_VALUE
        ? sensorData
        : sensors.reduce((res: Sensor[], item: Sensor, index) => {
            if (index === 0) {
              return [item];
            }

            const repeatedItemArray = res.filter((el) => el.id === item.id);

            return repeatedItemArray.length === 0 ? [...res, item] : res;
          }, []);

    const filterWithouRepeatDeviceData =
      deviceFilters.purpose === DROPDOWN_DEFAULT_VALUE &&
      deviceFilters.control_type === DROPDOWN_DEFAULT_VALUE &&
      deviceFilters.measure_show_type === DROPDOWN_DEFAULT_VALUE &&
      deviceFilters.type === DROPDOWN_DEFAULT_VALUE &&
      deviceFilters.operation_principle === DROPDOWN_DEFAULT_VALUE &&
      deviceFilters.manufacturing_technology === DROPDOWN_DEFAULT_VALUE
        ? deviceData
        : devices.reduce((res: Device[], item: Device, index) => {
            if (index === 0) {
              return [item];
            }

            const repeatedItemArray = res.filter((el) => el.id === item.id);

            return repeatedItemArray.length === 0 ? [...res, item] : res;
          }, []);

    // вынести в отдельную функцию
    const sensorFilteredData = filterWithouRepeatSensorsData.filter((item) => {
      const unit_of_measuring = generalFilters.unit_of_measuring
        ? item.unit_of_measuring === generalFilters.unit_of_measuring
        : true;
      const temperature_unit = generalFilters.temperature_unit
        ? item.temperature_unit === generalFilters.temperature_unit
        : true;
      const protection_class = generalFilters.protection_class
        ? item.protection_class === generalFilters.protection_class
        : true;
      const measurement_error = generalFilters.measurement_error
        ? item.measurement_error <= generalFilters.measurement_error
        : true;
      const measure_max = generalFilters.measure_max
        ? item.measure_max === generalFilters.measure_max
        : true;
      const measure_min = generalFilters.measure_min
        ? item.measure_min === generalFilters.measure_min
        : true;
      const lower_temperature_threshold = generalFilters.lower_temperature_threshold
        ? item.lower_temperature_threshold >= (generalFilters.lower_temperature_threshold as number)
        : true;
      const upper_temperature_threshold = generalFilters.upper_temperature_threshold
        ? item.upper_temperature_threshold >= (generalFilters.upper_temperature_threshold as number)
        : true;
      const resource = generalFilters.resource
        ? item.resource >= (generalFilters.resource as number)
        : true;

      const length = generalFilters.length
        ? item.length <= (generalFilters.length as number)
        : true;

      const height = generalFilters.height
        ? item.height <= (generalFilters.height as number)
        : true;

      const width = generalFilters.width ? item.width <= (generalFilters.width as number) : true;

      const weight = generalFilters.weight
        ? item.weight <= (generalFilters.weight as number)
        : true;

      const unit_of_length = generalFilters.unit_of_length
        ? item.unit_of_length === generalFilters.unit_of_length
        : true;

      const unit_of_weight = generalFilters.unit_of_weight
        ? item.unit_of_weight === generalFilters.unit_of_weight
        : true;

      const power = generalFilters.power ? item.power === generalFilters.power : true;

      const measuring_channels = generalFilters.measuring_channels
        ? item.measuring_channels >= (generalFilters.measuring_channels as number)
        : true;

      return (
        measuring_channels &&
        power &&
        unit_of_weight &&
        unit_of_length &&
        weight &&
        width &&
        height &&
        length &&
        resource &&
        upper_temperature_threshold &&
        lower_temperature_threshold &&
        measure_min &&
        measure_max &&
        measurement_error &&
        protection_class &&
        temperature_unit &&
        unit_of_measuring
      );
    });

    const deviceFilterData = filterWithouRepeatDeviceData.filter((item) =>
      generalFilters.unit_of_measuring
        ? item.unit_of_measuring === generalFilters.unit_of_measuring
        : true && generalFilters.temperature_unit
        ? item.temperature_unit === generalFilters.temperature_unit
        : true && generalFilters.protection_class
        ? item.protection_class === generalFilters.protection_class
        : true && generalFilters.measurement_error
        ? item.measurement_error === generalFilters.measurement_error
        : true && generalFilters.measure_max
        ? item.measure_max <= generalFilters.measure_max
        : true && generalFilters.measure_min
        ? item.measure_min >= generalFilters.measure_min
        : true && generalFilters.resource
        ? item.resource === generalFilters.resource
        : true && generalFilters.lower_temperature_threshold
        ? item.lower_temperature_threshold >= generalFilters.lower_temperature_threshold
        : true && generalFilters.upper_temperature_threshold
        ? item.upper_temperature_threshold <= generalFilters.upper_temperature_threshold
        : true && generalFilters.length
        ? item.length <= generalFilters.length
        : true && generalFilters.height
        ? item.height <= generalFilters.height
        : true && generalFilters.width
        ? item.width <= generalFilters.width
        : true && generalFilters.unit_of_length
        ? item.unit_of_length === generalFilters.unit_of_length
        : true && generalFilters.weight
        ? item.weight <= generalFilters.weight
        : true && generalFilters.unit_of_weight
        ? item.unit_of_weight === generalFilters.unit_of_weight
        : true && generalFilters.protection_class
        ? item.protection_class === generalFilters.protection_class
        : true && generalFilters.power
        ? item.power === generalFilters.power
        : true && generalFilters.measuring_channels
        ? item.measuring_channels === generalFilters.measuring_channels
        : true,
    );

    setFilterSensorData(
      sensorFilteredData.reduce((res: Sensor[], item) => {
        const findedItem = sensorData.find((sensor) => sensor.id === item.id);

        if (findedItem) {
          return [...res, findedItem];
        }

        return res;
      }, []),
    );

    setFilterDeviceData(
      deviceFilterData.reduce((res: Device[], item) => {
        const findedItem = deviceData.find((device) => device.id === item.id);

        if (findedItem) {
          return [...res, findedItem];
        }

        return res;
      }, []),
    );
  };

  useEffect(() => {
    setFilterSensorData(sensorData);
    setFilterDeviceData(deviceData);
  }, [deviceData, sensorData, setFilterSensorData, setFilterDeviceData]);

  return (
    <>
      <MainSearch
        isActive={isSearchActive}
        sensorData={filterSensorData}
        deviceData={filterDeviceData}
        isSensorSearchActive={isSensorSearchActive}
        setIsActive={setIsSearchActive}
      />
      <Transition in={isActive} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <SSidebar state={state}>
            <SSidebarContainer>
              <SCloseButton onClick={() => setIsActive(false)}>
                <CloseIcon fill={theme.colors.white} />
              </SCloseButton>
              <SButtonContainer>
                <Button
                  onClick={() => {
                    setFilterSensorData(sensorData);
                    setFilterDeviceData(deviceData);
                    setSensorFilters(DEFAULT_SENSOR_FILTERS);
                  }}
                  color={theme.colors.white}
                  backgroundColor={theme.colors.blue}>
                  Сбросить фильтры
                </Button>
                <Spacer marginRight={10} />
                <SSearchButton>
                  <Button
                    onClick={() => setIsSearchActive(true)}
                    color={theme.colors.white}
                    backgroundColor={theme.colors.blue}>
                    <SearchIcon />
                  </Button>
                </SSearchButton>
              </SButtonContainer>
              <Spacer height={25} />

              <SButtonContainer>
                <Button
                  onClick={() => handleSetFilters()}
                  color={theme.colors.white}
                  backgroundColor={theme.colors.blue}>
                  Применить фильтры
                </Button>
              </SButtonContainer>
              <Spacer height={25} />

              <InputField
                label="Погрешность измерения, %"
                labelColor={theme.colors.white}
                placeholder="Погрешность измерения, %"
                defaultValue={String(generalFilters.measurement_error)}
                type="number"
                onChange={(value) =>
                  setGeneralFilters((prev) => ({ ...prev, measurement_error: Number(value) }))
                }
              />
              <Spacer height={25} />

              {isSensorSearchActive ? (
                <>
                  <Typography color={theme.colors.white} fontSize={18} fontWeight={500}>
                    Параметры датчиков
                  </Typography>
                  <Spacer height={25} />
                  {/* <Dropdown
                    label="Тип датчика"
                    options={sensorTypes}
                    defaultValue={sensorFilters.type}
                    onChange={(event) => {
                      setSensorFilters((prev) => ({ ...prev, type: event.target.value }));
                    }}
                  />
                  <Spacer height={25} />
                  <Dropdown
                    options={measurableValues}
                    label="Измеряемая величина"
                    labelColor={theme.colors.white}
                    defaultValue={sensorFilters.measurable_value}
                    onChange={(event) =>
                      setSensorFilters((prev) => ({
                        ...prev,
                        measurable_value: event.target.value,
                      }))
                    }
                  />
                  <Spacer height={25} />
                  <Dropdown
                    options={outputSignals}
                    label="Характер выходного сигнала"
                    labelColor={theme.colors.white}
                    defaultValue={sensorFilters.output_signal}
                    onChange={(event) =>
                      setSensorFilters((prev) => ({
                        ...prev,
                        output_signal: event.target.value,
                      }))
                    }
                  />
                  <Spacer height={25} />
                  <Dropdown
                    options={signalConversations}
                    label="Характер преобразования сигнала"
                    labelColor={theme.colors.white}
                    defaultValue={sensorFilters.signal_conversation}
                    onChange={(event) =>
                      setSensorFilters((prev) => ({
                        ...prev,
                        signal_conversation: event.target.value,
                      }))
                    }
                  />

                  <Spacer height={25} />

                  <Dropdown
                    options={sensetiveElements}
                    label="Чувствительный элемент"
                    labelColor={theme.colors.white}
                    defaultValue={sensorFilters.sensitive_element}
                    onChange={(event) =>
                      setSensorFilters((prev) => ({
                        ...prev,
                        sensitive_element: event.target.value,
                      }))
                    }
                  /> */}
                  {/* <Spacer height={25} />
    <InputField
      label="Количество измерительных каналов"
      labelColor={theme.colors.white}
      placeholder="Количество каналов"
      type="number"
      defaultValue={String(sensorFilters.measuring_channels)}
      onChange={(value) =>
        setSensorFilters((prev) => ({ ...prev, measuring_channels: Number(value) }))
      }
    /> */}
                </>
              ) : (
                <>
                  <Typography color={theme.colors.white} fontSize={18} fontWeight={500}>
                    Параметры приборов
                  </Typography>
                  <Spacer height={25} />
                  {/* <Dropdown
                    options={purposes}
                    label="Назначение прибора"
                    labelColor={theme.colors.white}
                    defaultValue={deviceFilters.purpose}
                    onChange={(event) =>
                      setDeviceFilters((prev) => ({
                        ...prev,
                        purpose: event.target.value,
                      }))
                    }
                  />

                  <Spacer height={25} />
                  <Dropdown
                    options={controlTypes}
                    label="Способ управления"
                    labelColor={theme.colors.white}
                    defaultValue={deviceFilters.control_type}
                    onChange={(event) =>
                      setDeviceFilters((prev) => ({
                        ...prev,
                        control_type: event.target.value,
                      }))
                    }
                  />

                  <Spacer height={25} />
                  <Dropdown
                    options={showTypes}
                    label="Воспроизведение измеряемой величины"
                    labelColor={theme.colors.white}
                    defaultValue={deviceFilters.control_type}
                    onChange={(event) =>
                      setDeviceFilters((prev) => ({
                        ...prev,
                        measure_show_type: event.target.value,
                      }))
                    }
                  />

                  <Spacer height={25} />

                  <Dropdown
                    label="Тип прибора"
                    options={types}
                    defaultValue={deviceFilters.type}
                    onChange={(event) => {
                      setDeviceFilters((prev) => ({ ...prev, type: event.target.value }));
                    }}
                  /> */}

                  {/* <Spacer height={25} />
    <Dropdown
      options={[]}
      label="Способ воспроизведения измеряемой величины"
      labelColor={theme.colors.white}
      onChange={() => console.log('')}
    /> */}

                  {/* <Spacer height={25} />
    <InputField
      label="Выходное напряжение"
      labelColor={theme.colors.white}
      placeholder="Выходное напряжение"
      defaultValue=""
      onChange={() => console.log('')}
    />
    <Spacer height={25} />
    <InputField
      label="Входное сопротивление"
      labelColor={theme.colors.white}
      placeholder="Входное сопротивление"
      defaultValue=""
      onChange={() => console.log('')}
    />
    <Spacer height={25} />
    <InputField
      label="Выходное сопротивление"
      labelColor={theme.colors.white}
      placeholder="Выходное сопротивление"
      defaultValue=""
      onChange={() => console.log('')}
    /> */}
                </>
              )}

              <Spacer height={25} />
              <Typography color={theme.colors.white} fontSize={18} fontWeight={500}>
                Общие параметры
              </Typography>
              <Spacer height={25} />
              <InputField
                label="Верхний диапазон измерений"
                labelColor={theme.colors.white}
                placeholder="Верхний диапазон измерений"
                defaultValue={String(generalFilters.measure_max)}
                type="number"
                onChange={(value) =>
                  setGeneralFilters((prev) => ({ ...prev, measure_max: Number(value) }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Нижний диапазон измерений"
                labelColor={theme.colors.white}
                placeholder="Нижний диапазон измерений"
                defaultValue={String(generalFilters.measure_min)}
                type="number"
                onChange={(value) =>
                  setGeneralFilters((prev) => ({ ...prev, measure_min: Number(value) }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Единица измерения величины"
                labelColor={theme.colors.white}
                placeholder="Единица измерения величины"
                defaultValue={generalFilters.unit_of_measuring}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({ ...prev, unit_of_measuring: value }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Требуемый ресурс, ч"
                labelColor={theme.colors.white}
                placeholder="Требуемый ресурс, ч"
                type="number"
                defaultValue={String(generalFilters.resource)}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({ ...prev, resource: Number(value) }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Верхний диапазон температур внешней среды"
                labelColor={theme.colors.white}
                placeholder="Верхний диапазон температур"
                type="number"
                defaultValue={String(generalFilters.upper_temperature_threshold)}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({
                    ...prev,
                    upper_temperature_threshold: Number(value),
                  }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Нижний диапазон температур внешней среды"
                labelColor={theme.colors.white}
                placeholder="Нижний диапазон температур"
                type="number"
                defaultValue={String(generalFilters.lower_temperature_threshold)}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({
                    ...prev,
                    lower_temperature_threshold: Number(value),
                  }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Единица измерения температуры внешней среды"
                labelColor={theme.colors.white}
                placeholder="Единица измерения температуры"
                defaultValue={generalFilters.temperature_unit}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({ ...prev, temperature_unit: value }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Максимальная длина"
                labelColor={theme.colors.white}
                placeholder="Максимальная длина"
                type="number"
                defaultValue={String(generalFilters.length)}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({
                    ...prev,
                    length: Number(value),
                  }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Максимальная высота"
                labelColor={theme.colors.white}
                placeholder="Максимальная высота"
                type="number"
                defaultValue={String(generalFilters.height)}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({
                    ...prev,
                    height: Number(value),
                  }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Максимальная ширина"
                labelColor={theme.colors.white}
                placeholder="Максимальная ширина"
                type="number"
                defaultValue={String(generalFilters.width)}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({
                    ...prev,
                    width: Number(value),
                  }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Единица измерения длины"
                labelColor={theme.colors.white}
                placeholder="Единица измерения длины"
                defaultValue={generalFilters.unit_of_length}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({ ...prev, unit_of_length: value }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Максимальный вес"
                labelColor={theme.colors.white}
                placeholder="Максимальный вес"
                type="number"
                defaultValue={String(generalFilters.weight)}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({
                    ...prev,
                    weight: Number(value),
                  }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Единица измерения веса"
                labelColor={theme.colors.white}
                placeholder="Единица измерения веса"
                defaultValue={generalFilters.unit_of_weight}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({ ...prev, unit_of_weight: value }))
                }
              />
              <Spacer height={25} />
              <InputField
                label="Питание (Вольт)"
                labelColor={theme.colors.white}
                placeholder="Питание"
                defaultValue={generalFilters.power}
                onChange={(value) => setGeneralFilters((prev) => ({ ...prev, power: value }))}
              />
              <Spacer height={25} />
              <InputField
                label="Класс защиты"
                labelColor={theme.colors.white}
                placeholder="Класс защиты"
                defaultValue={generalFilters.protection_class}
                onChange={(value) =>
                  setGeneralFilters((prev) => ({ ...prev, protection_class: value }))
                }
              />
              <Spacer height={25} />
              {/* <Dropdown
                options={operationPrinciples}
                label="Принцип действия"
                labelColor={theme.colors.white}
                defaultValue={sensorFilters.operation_principle}
                onChange={(event) => {
                  setSensorFilters((prev) => ({
                    ...prev,
                    operation_principle: event.target.value,
                  }));
                  setDeviceFilters((prev) => ({
                    ...prev,
                    operation_principle: event.target.value,
                  }));
                }}
              /> */}

              <Spacer height={25} />
              {/* <Dropdown
                options={manufTechs}
                label="Технология изготовления"
                labelColor={theme.colors.white}
                defaultValue={sensorFilters.manufacturing_technology}
                onChange={(event) => {
                  setSensorFilters((prev) => ({
                    ...prev,
                    manufacturing_technology: event.target.value,
                  }));
                  setDeviceFilters((prev) => ({
                    ...prev,
                    manufacturing_technology: event.target.value,
                  }));
                }}
              /> */}
            </SSidebarContainer>
          </SSidebar>
        )}
      </Transition>
    </>
  );
};

const SSidebar = styled.div<{ state: string }>`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 15%;
  height: 100%;
  overflow: auto;

  color: ${theme.colors.white};
  background: ${theme.colors.sideDarkBlue};

  transition: 0.5s;
  transform: translateX(
    ${({ state }) => {
      switch (state) {
        case 'entering':
          return -400;
        case 'entered':
          return 0;
        case 'exiting':
          return -400;
        case 'exited':
          return 0;
      }
    }}px
  );
`;

const SSidebarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  top: 100%;
  padding: 50px 10px;
`;

const SButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;
`;

const SSearchButton = styled.div`
  width: 40px;
  height: 100%;
`;

const SCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default MainSidebarFilters;
