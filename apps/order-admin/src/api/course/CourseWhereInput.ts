import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CourseWhereInput = {
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
  title?: StringNullableFilter;
};
