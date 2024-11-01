import { BaseManager } from '../base.manager';
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

export class UserManager extends BaseManager {
  constructor(client: HashnodeSDKClient) {
    super(client, 'UserManager');
  }

  async getUser(username: string) {
    const res = await this.makeRequest<{ user: User }>(
      'getUser',
      GET_USER_QUERY,
      { username },
    );
    return res.user;
  }

  async getUserFollowers(username: string, page: number, pageSize: number) {
    const res = await this.makeRequest<{ user: UserConnection }>(
      'getUserFollowers',
      GET_USER_FOLLOWERS_QUERY,
      { username, page, pageSize },
    );
    return res.user;
  }

  async getFollowedUsers(username: string, page: number, pageSize: number) {
    const res = await this.makeRequest<{ user: UserConnection }>(
      'getFollowedUsers',
      GET_FOLLOWED_USERS_QUERY,
      { username, page, pageSize },
    );
    return res.user;
  }

  async getUserTechStack(username: string, page: number, pageSize: number) {
    const res = await this.makeRequest<{ user: UserTagsConnection }>(
      'getUserTechStack',
      GET_USER_TECHSTACK_QUERY,
      { username, page, pageSize },
    );
    return res.user;
  }

  async getUserBadges(username: string, page: number, pageSize: number) {
    const res = await this.makeRequest<{ user: Badge[] }>(
      'getUserBadges',
      GET_USER_BADGES_QUERY,
      { username },
    );
    return res.user;
  }

  async getUserPublications(
    username: string,
    first: number,
    after: string,
    filter: UserPublicationsConnectionFilter,
    sortBy: UserPublicationsSort = UserPublicationsSort.DateCreatedDesc,
  ) {
    const res = await this.makeRequest<{ user: UserPublicationsConnection }>(
      'getUserPublications',
      GET_USER_PUBLICATIONS_QUERY,
      { username, first, after, sortBy, filter },
    );
    return res.user;
  }

  async getUserPosts(
    username: string,
    first: number,
    after: string,
    filter: UserPostConnectionFilter,
    sortBy: UserPostsSort = UserPostsSort.DatePublishedDesc,
  ) {
    const res = await this.makeRequest<{ user: UserPostConnection }>(
      'getUserPosts',
      GET_USER_POSTS_QUERY,
      { username, first, after, sortBy, filter },
    );
    return res.user;
  }

  async getUserFollowedTags(username: string) {
    const res = await this.makeRequest<{ user: Tag[] }>(
      'getUserFollowedTags',
      GET_USER_FOLLOWED_TAGS_QUERY,
      { username },
    );
    return res.user;
  }
}
