import { IUser } from './IUser';

export interface IRole {
  id: number;
  value: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  users: IUser[];
}

export interface AddRoleResponse {
  value: string;
  id: number;
}

export interface AddRolePayload {
    role: IRole;
    id: number;
  }
