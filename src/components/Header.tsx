import React, { useCallback, useEffect, useMemo, useState } from 'react';
import theme from 'theme';

import styled from 'styled-components';

import Spacer from 'components/Spacer';

import LogoIcon from './icons/LogoIcon';
import LoginIcon from './icons/LoginIcon';
import ExitIcon from './icons/ExitIcon';
import UniversityTextIcon from './icons/UniversityTextIcon';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Typography from './Typography';
import PlusIcon from './icons/PlusIcon';
import List from './List';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import mainSlice from 'modules/main/services/MainSlice';

const LIST_ITEMS = [
  { label: 'Добавить датчик', route: '../add-sensor' },
  { label: 'Добавить прибор', route: '../add-device' },
  { label: 'Измеряемая величина', route: '../measurable-value' },
  { label: 'Производитель', route: '../producer' },
  { label: 'Литература', route: '../literature' },
  { label: 'Среда измерения', route: '../environment' },
  { label: 'Область применения', route: '../application-sphere' },
  { label: 'Технология изготовления', route: '../manufacturing-technology' },
  { label: 'Принцип действия', route: '../operation-principle' },
  { label: 'Чувствительный элемент', route: '../sensitive-element' },
  { label: 'Характер выходного сигнала', route: '../output-signal' },
  { label: 'Характер преобразования сигнала', route: '../signal-conversation' },
  { label: 'Тип датчика', route: '../sensor-type' },
  { label: 'Тип прибора', route: '../device-type' },
  { label: 'Назначение', route: '../prupose' },
  { label: 'Способ управления', route: '../control-type' },
  { label: 'Воспроизведение измеряемой величины', route: '../measure-show-type' },
];

const ADMIN_ROLE = 'ADMIN';
const STUDENT_ROLE = 'STUDENT';
const DEVELOPER_ROLE = 'DEVELOPER';
const ADMIN_ROLE_VALUE = 'Администратор';
const STUDENT_ROLE_VALUE = 'Студент';
const DEVELOPER_ROLE_VALUE = 'Разработчик';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isAddInfoListVisible, setIsAddInfoListVisible] = useState(false);
  const role = localStorage.getItem('role');
  const dispatch = useAppDispatch();
  const handleNavigation = useCallback(
    (route: string) => {
      const token = localStorage.getItem('token');

      if (token) {
        return navigate(route);
      }
    },
    [navigate],
  );

  const handleExit = useCallback(() => {
    navigate('/auth');
    dispatch(mainSlice.actions.exit());
  }, [navigate, dispatch]);

  return (
    <SHeader id="header-root">
      <SHeaderContent>
        <SIconContainer>
          <SIconContainer>
            <Button
              onClick={() => handleNavigation('../')}
              backgroundColor="transparent"
              hoverBackground="transparent">
              <LogoIcon />
            </Button>
          </SIconContainer>
          <Spacer marginRight={20} height={10} />
          <SIconContainer>
            <UniversityTextIcon />
          </SIconContainer>
        </SIconContainer>
        <SRightContentContainer>
          {role === ADMIN_ROLE && (
            <SUserStatusButton onClick={() => handleNavigation('../admin')}>
              <Typography color={theme.colors.statusBlue} fontSize={14}>
                {ADMIN_ROLE_VALUE}
              </Typography>
            </SUserStatusButton>
          )}
          {role === DEVELOPER_ROLE && (
            <SUserStatus>
              <Typography color={theme.colors.statusBlue} fontSize={14}>
                {DEVELOPER_ROLE_VALUE}
              </Typography>
            </SUserStatus>
          )}
          {role === STUDENT_ROLE && (
            <SUserStatus>
              <Typography color={theme.colors.statusBlue} fontSize={14}>
                {STUDENT_ROLE_VALUE}
              </Typography>
            </SUserStatus>
          )}

          <Spacer marginRight={10} />
          {(role === ADMIN_ROLE || role == DEVELOPER_ROLE) && (
            <SIconContainer>
              <Button
                onClick={() => {
                  setIsAddInfoListVisible(true);
                }}
                backgroundColor="transparent"
                hoverBackground="rgba(55,125,255,.1)">
                <PlusIcon fill={theme.colors.lightGray} />
              </Button>
            </SIconContainer>
          )}

          {isAddInfoListVisible && (
            <SListContainer>
              <List data={LIST_ITEMS} setListVisible={setIsAddInfoListVisible} />
            </SListContainer>
          )}
          <SExitIconContainer>
            {role ? (
              <Button
                onClick={handleExit}
                backgroundColor="transparent"
                hoverBackground="rgba(55,125,255,.1)">
                <ExitIcon />
              </Button>
            ) : (
              <Button
                onClick={() => handleNavigation('../auth')}
                backgroundColor="transparent"
                hoverBackground="rgba(55,125,255,.1)">
                <LoginIcon />
              </Button>
            )}
          </SExitIconContainer>
        </SRightContentContainer>
      </SHeaderContent>
    </SHeader>
  );
};

const SHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 120px;

  background: ${theme.colors.white};
`;

const SHeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 70%;
`;

const SRightContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SExitIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  border-radius: 5px;
`;

const SIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 44px;
`;

const SUserStatusButton = styled.button`
  padding: 5px;

  background: ${theme.colors.statusBlueBackground};
  border: 1px solid ${theme.colors.statusBlueBorder};
  border-radius: 2px;
  cursor: pointer;
`;

const SUserStatus = styled.div`
  padding: 5px;

  background: ${theme.colors.statusBlueBackground};
  border: 1px solid ${theme.colors.statusBlueBorder};
  border-radius: 2px;
  cursor: default;
`;

const SListContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 65%;

  width: 400px;
  z-index: 1;
`;

export default Header;
