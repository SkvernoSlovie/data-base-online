import { createSlice } from '@reduxjs/toolkit';
import { additionalInfoApi } from './AdditionalInfoApi';

import { IApplicationSphere } from 'models/IApplicationSphere';
import { IControlType } from 'models/IControlType';
import { IDeviceType, ISensorType } from 'models/IDeviceType';
import { IEnvironment } from 'models/IEnvironment';
import { ILiterature } from 'models/ILiterature';
import { IManufacturingTechnology } from 'models/IManufacturingTechnology';
import { IMeasurableValue } from 'models/IMeasurableValue';
import { IMeasureShowType } from 'models/IMeasureShowType';
import { IOperationPrinciple } from 'models/IOperationPrinciple';
import { IOutputSignal } from 'models/IOutputSignal';
import { IProducer } from 'models/IProducer';
import { IPrupose } from 'models/IPrupose';
import { ISensitiveElement } from 'models/ISensitiveElement';
import { ISignalConversation } from 'models/ISignalConversation';

interface AdditionalInfoState {
  appSpheres: IApplicationSphere[];
  controlTypes: IControlType[];
  deviceTypes: IDeviceType[];
  sensorTypes: ISensorType[];
  environments: IEnvironment[];
  literatures: ILiterature[];
  manufTechs: IManufacturingTechnology[];
  measurValues: IMeasurableValue[];
  showTypes: IMeasureShowType[];
  operationPrinciples: IOperationPrinciple[];
  outputSignals: IOutputSignal[];
  producers: IProducer[];
  pruposes: IPrupose[];
  sensitiveElements: ISensitiveElement[];
  signalConversations: ISignalConversation[];
}

const initialState: AdditionalInfoState = {
  appSpheres: [],
  controlTypes: [],
  deviceTypes: [],
  sensorTypes: [],
  environments: [],
  literatures: [],
  manufTechs: [],
  measurValues: [],
  showTypes: [],
  operationPrinciples: [],
  outputSignals: [],
  producers: [],
  pruposes: [],
  sensitiveElements: [],
  signalConversations: [],
};

const additionalInfoSlice = createSlice({
  name: 'additionalInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      additionalInfoApi.endpoints.getAllAppSpheres.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.appSpheres = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteAppSphere.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.appSpheres = state.appSpheres.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createAppSphere.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.appSpheres.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllControlTypes.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.controlTypes = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteControlType.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.controlTypes = state.controlTypes.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createControlType.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.controlTypes.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllDeviceTypes.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.deviceTypes = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteDeviceType.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.deviceTypes = state.deviceTypes.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createDeviceType.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.deviceTypes.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllSensorTypes.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.sensorTypes = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteSensorType.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.sensorTypes = state.sensorTypes.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createSensorType.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.sensorTypes.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllEnvironments.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.environments = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteEnvironment.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.environments = state.environments.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createEnvironment.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.environments.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllLiteratures.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.literatures = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteLiterature.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.literatures = state.literatures.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createLiterature.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.literatures.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllManufTechs.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.manufTechs = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteManufTech.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.manufTechs = state.manufTechs.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createManufTech.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.manufTechs.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllMeasurValues.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.measurValues = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteMeasurValue.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.measurValues = state.measurValues.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createMeasurValue.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.measurValues.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllMeasurShowTypes.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.showTypes = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteMeasurShowType.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.showTypes = state.showTypes.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createMeasurShowType.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.showTypes.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllOperationPrinciples.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.operationPrinciples = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteOperationPrinciple.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.operationPrinciples = state.operationPrinciples.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createOperationPrinciple.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.operationPrinciples.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllOutputSignals.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.outputSignals = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteOutputSignal.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.outputSignals = state.outputSignals.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createOutputSignal.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.outputSignals.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllProducers.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.producers = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteProducer.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.producers = state.producers.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createProducer.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.producers.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllPruposes.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.pruposes = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deletePrupose.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.pruposes = state.pruposes.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createPrupose.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.pruposes.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllSensitiveElements.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.sensitiveElements = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteSensitiveElement.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.sensitiveElements = state.sensitiveElements.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createSensetiveElement.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.sensitiveElements.push(payload);
      },
    );

    builder.addMatcher(
      additionalInfoApi.endpoints.getAllSignalConversations.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.signalConversations = payload;
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.deleteSignalConversation.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.signalConversations = state.signalConversations.filter((item) => item.id !== payload);
      },
    );
    builder.addMatcher(
      additionalInfoApi.endpoints.createSignalConversation.matchFulfilled,
      (state, action) => {
        const { payload } = action;

        state.signalConversations.push(payload);
      },
    );
  },
});

export default additionalInfoSlice.reducer;
