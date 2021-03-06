import { IRole } from './IRole';

export enum ROLES {
  ADMIN = 'Администратор',
  STUDENT = 'Студент',
}

export interface IUser {
  id: number;
  login: string;
  email: string;
  name: string;
  sername: string;
  password: string;
  posts: any[];
  roles: IRole[];
  createdAt: string;
  updatedAt: string;
  banned: boolean;
  banReason: string | null;
}
