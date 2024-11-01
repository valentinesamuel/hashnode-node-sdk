import { BaseManager } from '../base.manager';
import type { HashnodeSDKClient } from '../../client';
import {
  UserPostsSort,
  UserPublicationsSort,
  type Badge,
  type EmailNotificationPreferences,
  type MyUser,
  type UserConnection,
  type UserPostConnection,
  type UserPostConnectionFilter,
  type UserPublicationsConnection,
  type UserPublicationsConnectionFilter,
  type UserTagsConnection,
} from '../../generated/gqlQueryTypes';
import {
  GET_ME_QUERY,
  GET_MY_BADGES_QUERY,
  GET_MY_EMAIL_PREFENCES_QUERY,
  GET_MY_FOLLOWED_USERS_QUERY,
  GET_MY_FOLLOWERS_QUERY,
  GET_MY_POSTS_QUERY,
  GET_MY_PUBLICATIONS_QUERY,
  GET_MY_TECHSTACK_QUERY,
} from './me.queries';

export class MeManager extends BaseManager {
  constructor(client: HashnodeSDKClient) {
    super(client, 'MeManager');
  }

  async getMe() {
    const res = await this.makeRequest<{ me: MyUser }>('getMe', GET_ME_QUERY);
    return res.me;
  }

  async getMyEmailNotificationPreferences() {
    const res = await this.makeRequest<{ me: EmailNotificationPreferences }>(
      'getMyEmailNotificationPreferences',
      GET_MY_EMAIL_PREFENCES_QUERY,
    );
    return res.me;
  }

  async getMyPublications(
    first: number,
    after: string,
    filter: UserPublicationsConnectionFilter,
    sortBy: UserPublicationsSort = UserPublicationsSort.DateCreatedDesc,
  ) {
    const res = await this.makeRequest<{ me: UserPublicationsConnection }>(
      'getMyPublications',
      GET_MY_PUBLICATIONS_QUERY,
      { first, after, sortBy, filter },
    );
    return res.me;
  }

  async getMyPosts(
    first: number,
    after: string,
    filter: UserPostConnectionFilter,
    sortBy: UserPostsSort = UserPostsSort.DatePublishedDesc,
  ) {
    const res = await this.makeRequest<{ me: UserPostConnection }>(
      'getMyPosts',
      GET_MY_POSTS_QUERY,
      { first, after, sortBy, filter },
    );
    return res.me;
  }

  async getMyBadges() {
    const res = await this.makeRequest<{ me: Badge[] }>(
      'getMyBadges',
      GET_MY_BADGES_QUERY,
    );
    return res.me;
  }

  async getMyTechStack(page: number, pageSize: number) {
    const res = await this.makeRequest<{ me: UserTagsConnection }>(
      'getMyTechStack',
      GET_MY_TECHSTACK_QUERY,
      { page, pageSize },
    );
    return res.me;
  }

  async getMyFollowedUsers(page: number, pageSize: number) {
    const res = await this.makeRequest<{ me: UserConnection }>(
      'getMyFollowedUsers',
      GET_MY_FOLLOWED_USERS_QUERY,
      { page, pageSize },
    );
    return res.me;
  }

  async getUserFollowers(page: number, pageSize: number) {
    const res = await this.makeRequest<{ me: UserConnection }>(
      'getUserFollowers',
      GET_MY_FOLLOWERS_QUERY,
      { page, pageSize },
    );
    return res.me;
  }
}
