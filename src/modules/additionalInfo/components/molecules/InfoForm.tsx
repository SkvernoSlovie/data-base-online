import React, { useState } from 'react';
import theme from 'theme';

import styled from 'styled-components';

import Typography from 'components/Typography';
import InputField from 'components/InputField';
import Spacer from 'components/Spacer';
import Button from 'components/Button';
import GetInfoList from 'components/GetInfoList';
import { ListItem } from 'types';
import ErrorToast from '../../../../components/ErrorToast';

const IS_OBLIGATORY_FIELD_ERROR = 'Обязательное поле';

interface InfoFormProps {
  title: string;
  nameValue: string;
  data: Partial<ListItem>[];
  nameChangeHandle: (value: string) => void;
  addInfoHandler: () => void;
  removeInfoHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined,
    id: number,
  ) => void;
  clickInfoItem: (item: any) => void;
}

const InfoForm: React.FC<InfoFormProps> = ({
  title,
  nameValue,
  nameChangeHandle,
  addInfoHandler,
  data,
  removeInfoHandler,
  clickInfoItem,
  children,
}) => {
  const [isError, setIsError] = useState(false);

  const handleAddInfoClick = () => {
    if (nameValue) {
      addInfoHandler();
      return;
    }

    setIsError(true);
  };

  const handleNameChange = (value: string) => {
    setIsError(false);
    nameChangeHandle(value);
  };

  return (
    <SInfoForm>
      <SInfoFormContainer>
        <SHeaderContent>
          <Typography fontSize={theme.fontSizes.xxl} fontWeight={500}>
            {title}
          </Typography>
          <Spacer marginRight={40} />
          <SInputContainer>
            <InputField
              defaultValue={nameValue}
              onChange={handleNameChange}
              placeholder="Наименование"
              withBorder
            />
          </SInputContainer>
        </SHeaderContent>
        <SHeaderButtonContainer>
          <Button
            onClick={handleAddInfoClick}
            color={theme.colors.white}
            backgroundColor={theme.colors.blue}
            hoverBackground={theme.colors.darkBlue}>
            Добавить информацию
          </Button>
        </SHeaderButtonContainer>
      </SInfoFormContainer>
      <Spacer height={10} />
      <SInfoListContent>
        {children && (
          <>
            <SContentContainer>{children}</SContentContainer>
            <Spacer height={50} />
          </>
        )}

        <SInfoFormListContainer>
          <GetInfoList
            data={data}
            deleteItemHandler={removeInfoHandler}
            itemClickHandler={clickInfoItem}
          />
        </SInfoFormListContainer>

        <Spacer height={20} />

        <ErrorToast
          text="Не заполнено обязательное поле"
          isActive={isError}
          setIsActive={setIsError}
        />
      </SInfoListContent>
    </SInfoForm>
  );
};

const SInfoForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  min-height: 100%;
`;

const SInfoFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 70%;
  height: 10%;
`;

const SHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 70%;
`;

const SInputContainer = styled.div`
  width: 40%;
`;

const SHeaderButtonContainer = styled.div`
  width: 20%;
  height: 45px;
`;

const SInfoListContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  min-height: 90vh;
  padding-top: 40px;
  box-sizing: border-box;
  background: ${theme.colors.backgroundLightBlueColor};
`;

const SContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 70%;
  height: 40%;
`;

const SInfoFormListContainer = styled.div`
  width: 70%;
`;

export default InfoForm;
