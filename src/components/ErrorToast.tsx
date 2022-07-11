import React from 'react';
import theme from 'theme';

import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import CloseIcon from './icons/CloseIcon';
import Typography from './Typography';

interface ErrorToastProps {
  text: string;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ text, isActive, setIsActive }) => {
  return (
    <Transition in={isActive} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <SErrorToast state={state}>
          <STypographyContainer>
            <Typography color={theme.colors.red}>{text}</Typography>
          </STypographyContainer>

          <SCloseButton onClick={() => setIsActive(false)}>
            <CloseIcon />
          </SCloseButton>
        </SErrorToast>
      )}
    </Transition>
  );
};

const SErrorToast = styled.div<{ state: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 90%;
  right: 2%;

  background: ${theme.colors.white};
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 0 16px 0 ${theme.colors.borderColor};

  transition: 0.5s;
  transform: translateX(
    ${({ state }) => {
      switch (state) {
        case 'entering':
          return 400;
        case 'entered':
          return 0;
        case 'exiting':
          return 400;
        case 'exited':
          return 0;
      }
    }}px
  );
`;

const STypographyContainer = styled.div`
  white-space: nowrap;
`;

const SCloseButton = styled.button`
  background: ${theme.colors.transparent};
  border: none;
  outline: none;
  cursor: pointer;
`;

export default ErrorToast;
