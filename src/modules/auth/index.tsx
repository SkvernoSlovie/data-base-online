import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from 'theme';

import styled from 'styled-components';

import { AuthPayload } from 'types';
import { authApi } from './services/AuthApi';

import AuthForm from './components/organisms/AuthForm';
import { mainApi } from 'modules/main/services/MainApi';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [authUser] = authApi.useAuthUserMutation();
  const [getUserByEmail] = mainApi.useGetUserByEmailMutation();

  const handleSubmit = useCallback(
    async (loginData: AuthPayload) => {
      const response = await authUser(loginData);
      const userResponse = await getUserByEmail(loginData.email);

      if ('error' in response && 'error' in userResponse) {
        console.log(response, userResponse);
      }

      if ('data' in response) {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);

        navigate('/', { replace: true });
      }
    },
    [authUser, navigate, getUserByEmail],
  );

  return (
    <SAuth>
      <AuthForm onSubmit={handleSubmit} />
    </SAuth>
  );
};

const SAuth = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  background: ${theme.colors.backgroundLightBlueColor};
`;

export default Auth;
