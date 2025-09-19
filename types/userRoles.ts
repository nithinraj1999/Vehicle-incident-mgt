export enum UserRole {
  DRIVER = 'DRIVER',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
  OTHER = 'OTHER'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}