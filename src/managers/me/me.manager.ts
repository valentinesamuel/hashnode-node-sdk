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

export class MeManager {
  private readonly client: HashnodeSDKClient;

  constructor(client: HashnodeSDKClient) {
    console.log('MeManager created');
    this.client = client;
  }

  async getMe() {
    const res = await this.client._request({
      query: GET_ME_QUERY,
    });
    return res.data.me as MyUser;
  }

  async getMyEmailNotificationPreferences() {
    const res = await this.client._request({
      query: GET_MY_EMAIL_PREFENCES_QUERY,
    });
    return res.data.me
      .emailNotificationPreferences as EmailNotificationPreferences;
  }

  async getMyPublications(
    first: number,
    after: string,
    filter: UserPublicationsConnectionFilter,
    sortBy: UserPublicationsSort = UserPublicationsSort.DateCreatedDesc,
  ) {
    const res = await this.client._request({
      query: GET_MY_PUBLICATIONS_QUERY,
      variables: {
        first,
        after,
        sortBy,
        filter,
      },
    });
    return res.data.me.publications as UserPublicationsConnection;
  }

  async getMyPosts(
    first: number,
    after: string,
    filter: UserPostConnectionFilter,
    sortBy: UserPostsSort = UserPostsSort.DatePublishedDesc,
  ) {
    const res = await this.client._request({
      query: GET_MY_POSTS_QUERY,
      variables: {
        first,
        after,
        sortBy,
        filter,
      },
    });
    return res.data.me.posts as UserPostConnection;
  }

  async getMyBadges() {
    const res = await this.client._request({
      query: GET_MY_BADGES_QUERY,
    });
    return res.data.me.badges as Badge[];
  }

  async getMyTechStack(page: number, pageSize: number) {
    const res = await this.client._request({
      query: GET_MY_TECHSTACK_QUERY,
      variables: {
        page,
        pageSize,
      },
    });
    return res.data.me.techStack as UserTagsConnection;
  }

  async getMyFollowedUsers(page: number, pageSize: number) {
    const res = await this.client._request({
      query: GET_MY_FOLLOWED_USERS_QUERY,
      variables: {
        page,
        pageSize,
      },
    });
    return res.data.me.follows as UserConnection;
  }

  async getUserFollowers(page: number, pageSize: number) {
    const res = await this.client._request({
      query: GET_MY_FOLLOWERS_QUERY,
      variables: {
        page,
        pageSize,
      },
    });
    return res.data.me.followers as UserConnection;
  }
}
