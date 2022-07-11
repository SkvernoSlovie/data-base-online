export type CreateAdditionalInfoPayload = {
  name: string;
  updatedAt: string;
  createdAt: string;
  devices?: [];
  sensors?: [];
};
export type CreateAdditionalInfoResponse = CreateAdditionalInfoPayload & {
  id: number;
};

export type CreateAdditionalInfoWithDescriptionPayload = CreateAdditionalInfoPayload & {
  description: string;
};
export type CreateAdditionalInfoWithDescriptionResponse =
  CreateAdditionalInfoWithDescriptionPayload & {
    id: number;
  };

export type CreateLiteraturePayload = CreateAdditionalInfoPayload & {
  author: string;
  year_of_publish: number;
  literature_publisher: string;
  literature_website: string;
};
export type CreateLiteratureResponse = CreateLiteraturePayload & {
  id: number;
};

export type CreateProducerPayload = CreateAdditionalInfoPayload & {
  address: string;
  phone: string;
  website: string;
  email: string;
};
export type CreateProducerResponse = CreateProducerPayload & {
  id: number;
};

export type CreateMeasurValuePayload = CreateAdditionalInfoWithDescriptionPayload & {
  measurerange_max: number;
  measurerange_min: number;
};
export type CreateMeasurValueResponce = CreateMeasurValuePayload & CreateLiteratureResponse;
