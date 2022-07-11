import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import styled from 'styled-components';

import Admin from 'modules/admin';
import RegistrationSuccess from 'modules/registration/RegistrationSuccess';

import Auth from './modules/auth';
import Main from './modules/main';
import Registration from './modules/registration';
import Header from './components/Header';

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <SApp>
      <SHeaderContainer>
        <Header />
      </SHeaderContainer>
      <SContentContainer>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/success" element={<RegistrationSuccess />} />
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/add-device" element={<AddDevice />} />
          <Route path="/sensor" element={<Sensor />} />
          <Route path="/device" element={<Device />} />
          <Route path="/add-sensor" element={<AddSensor />} />
          <Route path="/application-sphere" element={<ApplicationSphere />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/producer" element={<Producer />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/manufacturing-technology" element={<ManufacturingTechnology />} />
          <Route path="/operation-principle" element={<OperationPrinciple />} />
          <Route path="/sensitive-element" element={<SensitiveElement />} />
          <Route path="/output-signal" element={<OutputSignal />} />
          <Route path="/signal-conversation" element={<SignalConversation />} />
          <Route path="/prupose" element={<Purpose />} />
          <Route path="/control-type" element={<Control />} />
          <Route path="/device-type" element={<DeviceTypeForm />} />
          <Route path="/sensor-type" element={<SensorTypeForm />} />
          <Route path="/measure-show-type" element={<ShowType />} />
          <Route path="/measurable-value" element={<MeasurableValue />} /> */}
        </Routes>
      </SContentContainer>
    </SApp>
  );
};

const SApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;

  box-sizing: border-box;
`;

const SHeaderContainer = styled.div`
  width: 100%;
  height: 15%;
`;

const SContentContainer = styled.div`
  width: 100%;
  height: 85%;
`;

export default App;
