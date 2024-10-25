/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Course } from "./Course";
import { CourseCountArgs } from "./CourseCountArgs";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseFindUniqueArgs } from "./CourseFindUniqueArgs";
import { CreateCourseArgs } from "./CreateCourseArgs";
import { UpdateCourseArgs } from "./UpdateCourseArgs";
import { DeleteCourseArgs } from "./DeleteCourseArgs";
import { User } from "../../user/base/User";
import { CourseService } from "../course.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Course)
export class CourseResolverBase {
  constructor(
    protected readonly service: CourseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async _coursesMeta(
    @graphql.Args() args: CourseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Course])
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async courses(@graphql.Args() args: CourseFindManyArgs): Promise<Course[]> {
    return this.service.courses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Course, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "own",
  })
  async course(
    @graphql.Args() args: CourseFindUniqueArgs
  ): Promise<Course | null> {
    const result = await this.service.course(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Course)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "create",
    possession: "any",
  })
  async createCourse(@graphql.Args() args: CreateCourseArgs): Promise<Course> {
    return await this.service.createCourse({
      ...args,
      data: {
        ...args.data,

        owner: args.data.owner
          ? {
              connect: args.data.owner,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Course)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateCourse(
    @graphql.Args() args: UpdateCourseArgs
  ): Promise<Course | null> {
    try {
      return await this.service.updateCourse({
        ...args,
        data: {
          ...args.data,

          owner: args.data.owner
            ? {
                connect: args.data.owner,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Course)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "delete",
    possession: "any",
  })
  async deleteCourse(
    @graphql.Args() args: DeleteCourseArgs
  ): Promise<Course | null> {
    try {
      return await this.service.deleteCourse(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "owner",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getOwner(@graphql.Parent() parent: Course): Promise<User | null> {
    const result = await this.service.getOwner(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}