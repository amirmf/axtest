import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CourseUpdateInput = {
  owner?: UserWhereUniqueInput | null;
  title?: string | null;
};
