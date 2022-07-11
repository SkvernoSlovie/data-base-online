export type IMeasurableValue = {
  id: number;
  name: string;
  description: string;
  measurerange_min: number;
  measurerange_max: number;
  createdAt: string;
  updatedAt: string;
  sensors?: [];
  device?: [];
};
