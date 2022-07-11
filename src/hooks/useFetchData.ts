import { useEffect, useState } from 'react';
import { mainApi } from '../modules/main/services/MainApi';

export const useFetchData = () => {
  const [getAllSensors] = mainApi.useGetAllSensorsMutation();
  const [getAllDevices] = mainApi.useGetAllDevicesMutation();

  const [deviceLoading, setDeviceLoading] = useState(true);
  const [sensorLoading, setSensorLoading] = useState(true);

  const fetchWithLoadingHandle = async (
    getData: () => any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    const response = await getData();

    if ('data' in response) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWithLoadingHandle(getAllSensors, setSensorLoading);
    fetchWithLoadingHandle(getAllDevices, setDeviceLoading);
  }, [getAllSensors, getAllDevices]);

  return [deviceLoading, sensorLoading];
};
