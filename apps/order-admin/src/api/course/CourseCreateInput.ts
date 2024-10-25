import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CourseCreateInput = {
  owner?: UserWhereUniqueInput | null;
  title?: string | null;
};
