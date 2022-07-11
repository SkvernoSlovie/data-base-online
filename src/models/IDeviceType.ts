export type IType = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type IDeviceType = IType & {
  devices?: [];
};

export type ISensorType = IType & {
  sensors?: [];
};
