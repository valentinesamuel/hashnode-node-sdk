import type { HashnodeSDKClient } from '../../client';
import {
  UserPostsSort,
  UserPublicationsSort,
  type Badge,
  type Tag,
  type User,
  type UserConnection,
  type UserPostConnection,
  type UserPostConnectionFilter,
  type UserPublicationsConnection,
  type UserPublicationsConnectionFilter,
  type UserTagsConnection,
} from '../../generated/gqlQueryTypes';
import {
  GET_FOLLOWED_USERS_QUERY,
  GET_USER_BADGES_QUERY,
  GET_USER_FOLLOWED_TAGS_QUERY,
  GET_USER_FOLLOWERS_QUERY,
  GET_USER_POSTS_QUERY,
  GET_USER_PUBLICATIONS_QUERY,
  GET_USER_QUERY,
  GET_USER_TECHSTACK_QUERY,
} from './user.queries';

export class UserManager {
  private readonly client: HashnodeSDKClient;
  constructor(client: HashnodeSDKClient) {
    console.log('UserManager created');
    this.client = client;
  }

  async getUser(username: string) {
    const res = await this.client._request({
      query: GET_USER_QUERY,
      variables: {
        username,
      },
    });
    return res.data.user as User;
  }

  async getUserFollowers(username: string, page: number, pageSize: number) {
    const res = await this.client._request({
      query: GET_USER_FOLLOWERS_QUERY,
      variables: {
        username,
        page,
        pageSize,
      },
    });
    return res.data.user.followers as UserConnection;
  }

  async getFollowedUsers(username: string, page: number, pageSize: number) {
    const res = await this.client._request({
      query: GET_FOLLOWED_USERS_QUERY,
      variables: {
        username,
        page,
        pageSize,
      },
    });
    return res.data.user.follows as UserConnection;
  }

  async getUserTechStack(username: string, page: number, pageSize: number) {
    const res = await this.client._request({
      query: GET_USER_TECHSTACK_QUERY,
      variables: {
        username,
        page,
        pageSize,
      },
    });
    return res.data.user.techStack as UserTagsConnection;
  }

  async getUserBadges(username: string, page: number, pageSize: number) {
    const res = await this.client._request({
      query: GET_USER_BADGES_QUERY,
      variables: {
        username,
      },
    });
    return res.data.user.badges as Badge[];
  }

  async getUserPublications(
    username: string,
    first: number,
    after: string,
    filter: UserPublicationsConnectionFilter,
    sortBy: UserPublicationsSort = UserPublicationsSort.DateCreatedDesc,
  ) {
    const res = await this.client._request({
      query: GET_USER_PUBLICATIONS_QUERY,
      variables: {
        username,
        first,
        after,
        sortBy,
        filter,
      },
    });
    return res.data.user.publications as UserPublicationsConnection;
  }

  async getUserPosts(
    username: string,
    first: number,
    after: string,
    filter: UserPostConnectionFilter,
    sortBy: UserPostsSort = UserPostsSort.DatePublishedDesc,
  ) {
    const res = await this.client._request({
      query: GET_USER_POSTS_QUERY,
      variables: {
        username,
        first,
        after,
        sortBy,
        filter,
      },
    });
    return res.data.user.posts as UserPostConnection;
  }

  async getUserFollowedTags(username: string) {
    const res = await this.client._request({
      query: GET_USER_FOLLOWED_TAGS_QUERY,
      variables: {
        username,
      },
    });
    return res.data.user.tagsFollowing as Tag[];
  }
}
