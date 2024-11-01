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

/**
 * Manages operations related to the authenticated user.
 * Extends the BaseManager class.
 */
export class MeManager extends BaseManager {
  /**
   * Creates an instance of MeManager.
   * @param client - The HashnodeSDKClient instance.
   */
  constructor(client: HashnodeSDKClient) {
    super(client, 'MeManager');
  }

  /**
   * Retrieves the authenticated user's details.
   * @returns A promise that resolves to the authenticated user's details.
   */
  async getMe() {
    const res = await this.makeRequest<{ me: MyUser }>('getMe', GET_ME_QUERY);
    return res.me;
  }

  /**
   * Retrieves the authenticated user's email notification preferences.
   * @returns A promise that resolves to the authenticated user's email notification preferences.
   */
  async getMyEmailNotificationPreferences() {
    const res = await this.makeRequest<{ me: EmailNotificationPreferences }>(
      'getMyEmailNotificationPreferences',
      GET_MY_EMAIL_PREFENCES_QUERY,
    );
    return res.me;
  }

  /**
   * Retrieves the authenticated user's publications.
   * @param first - The number of publications to retrieve.
   * @param after - The cursor for pagination.
   * @param filter - The filter to apply to the publications.
   * @param sortBy - The sorting criteria for the publications.
   * @returns A promise that resolves to the authenticated user's publications.
   */
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

  /**
   * Retrieves the authenticated user's posts.
   * @param first - The number of posts to retrieve.
   * @param after - The cursor for pagination.
   * @param filter - The filter to apply to the posts.
   * @param sortBy - The sorting criteria for the posts.
   * @returns A promise that resolves to the authenticated user's posts.
   */
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

  /**
   * Retrieves the authenticated user's badges.
   * @returns A promise that resolves to the authenticated user's badges.
   */
  async getMyBadges() {
    const res = await this.makeRequest<{ me: Badge[] }>(
      'getMyBadges',
      GET_MY_BADGES_QUERY,
    );
    return res.me;
  }

  /**
   * Retrieves the authenticated user's tech stack.
   * @param page - The page number for pagination.
   * @param pageSize - The number of items per page.
   * @returns A promise that resolves to the authenticated user's tech stack.
   */
  async getMyTechStack(page: number, pageSize: number) {
    const res = await this.makeRequest<{ me: UserTagsConnection }>(
      'getMyTechStack',
      GET_MY_TECHSTACK_QUERY,
      { page, pageSize },
    );
    return res.me;
  }

  /**
   * Retrieves the users followed by the authenticated user.
   * @param page - The page number for pagination.
   * @param pageSize - The number of items per page.
   * @returns A promise that resolves to the users followed by the authenticated user.
   */
  async getMyFollowedUsers(page: number, pageSize: number) {
    const res = await this.makeRequest<{ me: UserConnection }>(
      'getMyFollowedUsers',
      GET_MY_FOLLOWED_USERS_QUERY,
      { page, pageSize },
    );
    return res.me;
  }

  /**
   * Retrieves the followers of the authenticated user.
   * @param page - The page number for pagination.
   * @param pageSize - The number of items per page.
   * @returns A promise that resolves to the followers of the authenticated user.
   */
  async getUserFollowers(page: number, pageSize: number) {
    const res = await this.makeRequest<{ me: UserConnection }>(
      'getUserFollowers',
      GET_MY_FOLLOWERS_QUERY,
      { page, pageSize },
    );
    return res.me;
  }
}
