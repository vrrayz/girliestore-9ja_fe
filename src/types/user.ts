export interface User {
  id: number;
  name: string;
  email: string;
  bio?: string;
  role: string;
  createdAt: Date;
}
