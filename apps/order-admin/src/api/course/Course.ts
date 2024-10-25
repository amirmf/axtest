import { User } from "../user/User";

export type Course = {
  createdAt: Date;
  id: string;
  owner?: User | null;
  title: string | null;
  updatedAt: Date;
};
