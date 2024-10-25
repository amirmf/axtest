import { Course } from "../course/Course";
import { JsonValue } from "type-fest";

export type User = {
  courses?: Array<Course>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
