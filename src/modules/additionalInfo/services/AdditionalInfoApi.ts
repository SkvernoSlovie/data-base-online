import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { BASE_URL, Method } from 'types';
import queryCreator from 'helpers/queryCreator';
import { IApplicationSphere } from 'models/IApplicationSphere';
import {
  CreateAdditionalInfoPayload,
  CreateAdditionalInfoResponse,
  CreateAdditionalInfoWithDescriptionPayload,
  CreateAdditionalInfoWithDescriptionResponse,
  CreateLiteraturePayload,
  CreateLiteratureResponse,
  CreateProducerResponse,
  CreateProducerPayload,
  CreateMeasurValueResponce,
  CreateMeasurValuePayload,
} from '../types';
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
import { ISignalConversation } from 'models/ISignalConversation';
import { ISensitiveElement } from 'models/ISensitiveElement';

export const additionalInfoApi = createApi({
  reducerPath: 'additionalInfo',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    createAppSphere: build.mutation<CreateAdditionalInfoResponse, CreateAdditionalInfoPayload>({
      query: (payload) => queryCreator(Method.POST, '/application-sphere', payload),
    }),
    getAllAppSpheres: build.mutation<IApplicationSphere[], void>({
      query: () => queryCreator(Method.GET, '/application-sphere'),
    }),
    deleteAppSphere: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/application-sphere', payload),
    }),

    createControlType: build.mutation<CreateAdditionalInfoResponse, CreateAdditionalInfoPayload>({
      query: (payload) => queryCreator(Method.POST, '/control-type', payload),
    }),
    getAllControlTypes: build.mutation<IControlType[], void>({
      query: () => queryCreator(Method.GET, '/control-type'),
    }),
    deleteControlType: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/control-type', payload),
    }),

    createDeviceType: build.mutation<CreateAdditionalInfoResponse, CreateAdditionalInfoPayload>({
      query: (payload) => queryCreator(Method.POST, '/type', payload),
    }),
    getAllDeviceTypes: build.mutation<IDeviceType[], void>({
      query: () => queryCreator(Method.GET, '/type'),
    }),
    deleteDeviceType: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/type', payload),
    }),

    createSensorType: build.mutation<CreateAdditionalInfoResponse, CreateAdditionalInfoPayload>({
      query: (payload) => queryCreator(Method.POST, '/sensor-type', payload),
    }),
    getAllSensorTypes: build.mutation<ISensorType[], void>({
      query: () => queryCreator(Method.GET, '/sensor-type'),
    }),
    deleteSensorType: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/sensor-type', payload),
    }),

    createEnvironment: build.mutation<
      CreateAdditionalInfoWithDescriptionResponse,
      CreateAdditionalInfoWithDescriptionPayload
    >({
      query: (payload) => queryCreator(Method.POST, '/environment', payload),
    }),
    getAllEnvironments: build.mutation<IEnvironment[], void>({
      query: () => queryCreator(Method.GET, '/environment'),
    }),
    deleteEnvironment: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/environment', payload),
    }),

    createLiterature: build.mutation<CreateLiteratureResponse, CreateLiteraturePayload>({
      query: (payload) => queryCreator(Method.POST, '/literature', payload),
    }),
    getAllLiteratures: build.mutation<ILiterature[], void>({
      query: () => queryCreator(Method.GET, '/literature'),
    }),
    deleteLiterature: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/literature', payload),
    }),

    createManufTech: build.mutation<
      CreateAdditionalInfoWithDescriptionResponse,
      CreateAdditionalInfoWithDescriptionPayload
    >({
      query: (payload) => queryCreator(Method.POST, '/manufacturing-technology', payload),
    }),
    getAllManufTechs: build.mutation<IManufacturingTechnology[], void>({
      query: () => queryCreator(Method.GET, '/manufacturing-technology'),
    }),
    deleteManufTech: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/manufacturing-technology', payload),
    }),

    createMeasurValue: build.mutation<CreateMeasurValueResponce, CreateMeasurValuePayload>({
      query: (payload) => queryCreator(Method.POST, '/manufacturing-technology', payload),
    }),
    getAllMeasurValues: build.mutation<IMeasurableValue[], void>({
      query: () => queryCreator(Method.GET, '/manufacturing-technology'),
    }),
    deleteMeasurValue: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/manufacturing-technology', payload),
    }),

    createMeasurShowType: build.mutation<CreateAdditionalInfoResponse, CreateAdditionalInfoPayload>(
      {
        query: (payload) => queryCreator(Method.POST, '/measure-show-type', payload),
      },
    ),
    getAllMeasurShowTypes: build.mutation<IMeasureShowType[], void>({
      query: () => queryCreator(Method.GET, '/measure-show-type'),
    }),
    deleteMeasurShowType: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/measure-show-type', payload),
    }),

    createOperationPrinciple: build.mutation<
      CreateAdditionalInfoWithDescriptionResponse,
      CreateAdditionalInfoWithDescriptionPayload
    >({
      query: (payload) => queryCreator(Method.POST, '/operation-principle', payload),
    }),
    getAllOperationPrinciples: build.mutation<IOperationPrinciple[], void>({
      query: () => queryCreator(Method.GET, '/operation-principle'),
    }),
    deleteOperationPrinciple: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/operation-principle', payload),
    }),

    createOutputSignal: build.mutation<
      CreateAdditionalInfoWithDescriptionResponse,
      CreateAdditionalInfoWithDescriptionPayload
    >({
      query: (payload) => queryCreator(Method.POST, '/output-signal', payload),
    }),
    getAllOutputSignals: build.mutation<IOutputSignal[], void>({
      query: () => queryCreator(Method.GET, '/output-signal'),
    }),
    deleteOutputSignal: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/output-signal', payload),
    }),

    createProducer: build.mutation<CreateProducerResponse, CreateProducerPayload>({
      query: (payload) => queryCreator(Method.POST, '/producer', payload),
    }),
    getAllProducers: build.mutation<IProducer[], void>({
      query: () => queryCreator(Method.GET, '/producer'),
    }),
    deleteProducer: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/producer', payload),
    }),

    createPrupose: build.mutation<
      CreateAdditionalInfoWithDescriptionResponse,
      CreateAdditionalInfoWithDescriptionPayload
    >({
      query: (payload) => queryCreator(Method.POST, '/prupose', payload),
    }),
    getAllPruposes: build.mutation<IPrupose[], void>({
      query: () => queryCreator(Method.GET, '/prupose'),
    }),
    deletePrupose: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/prupose', payload),
    }),

    createSensetiveElement: build.mutation<
      CreateAdditionalInfoWithDescriptionResponse,
      CreateAdditionalInfoWithDescriptionPayload
    >({
      query: (payload) => queryCreator(Method.POST, '/sensitive-element', payload),
    }),
    getAllSensitiveElements: build.mutation<ISensitiveElement[], void>({
      query: () => queryCreator(Method.GET, '/sensitive-element'),
    }),
    deleteSensitiveElement: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/sensitive-element', payload),
    }),

    createSignalConversation: build.mutation<
      CreateAdditionalInfoWithDescriptionResponse,
      CreateAdditionalInfoWithDescriptionPayload
    >({
      query: (payload) => queryCreator(Method.POST, '/signal-conversation', payload),
    }),
    getAllSignalConversations: build.mutation<ISignalConversation[], void>({
      query: () => queryCreator(Method.GET, '/signal-conversation'),
    }),
    deleteSignalConversation: build.mutation<number, Record<string, number>>({
      query: (payload) => queryCreator(Method.DELETE, '/signal-conversation', payload),
    }),
  }),
});
