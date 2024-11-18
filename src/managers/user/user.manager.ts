import { BaseManager } from '../base.manager';
import type { HashnodeSDKClient } from '../../client';
import {
  UserPostsSort,
  UserPublicationsSort,
  type Badge,
  type Tag,
  type ToggleFollowUserPayload,
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
import { TOGGLE_FOLLOW_USER_MUTATION } from './user.mutations';

/**
 * Manages user-related operations.
 *
 * @extends BaseManager
 */
export class UserManager extends BaseManager {
  /**
   * Creates an instance of UserManager.
   *
   * @param client - The Hashnode SDK client.
   */
  constructor(client: HashnodeSDKClient) {
    super(client, 'UserManager');
  }

  /**
   * Retrieves user information by username.
   *
   * @param username - The username of the user.
   *
   * @returns The user information.
   */
  async getUser(username: string) {
    const res = await this.makeRequest<{ user: User }>(
      'getUser',
      GET_USER_QUERY,
      { username },
    );
    return res.user;
  }

  /**
   * Retrieves the followers of a user.
   *
   * @param username - The username of the user.
   * @param page - The page number for pagination.
   * @param pageSize - The number of items per page.
   *
   * @returns The user followers.
   */
  async getUserFollowers(username: string, page: number, pageSize: number) {
    const res = await this.makeRequest<{ user: UserConnection }>(
      'getUserFollowers',
      GET_USER_FOLLOWERS_QUERY,
      { username, page, pageSize },
    );
    return res.user;
  }

  /**
   * Retrieves the users followed by a user.
   *
   * @param username - The username of the user.
   * @param page - The page number for pagination.
   * @param pageSize - The number of items per page.
   *
   * @returns The followed users.
   */
  async getFollowedUsers(username: string, page: number, pageSize: number) {
    const res = await this.makeRequest<{ user: UserConnection }>(
      'getFollowedUsers',
      GET_FOLLOWED_USERS_QUERY,
      { username, page, pageSize },
    );
    return res.user;
  }

  /**
   * Retrieves the tech stack of a user.
   *
   * @param username - The username of the user.
   * @param page - The page number for pagination.
   * @param pageSize - The number of items per page.
   *
   * @returns The user's tech stack.
   */
  async getUserTechStack(username: string, page: number, pageSize: number) {
    const res = await this.makeRequest<{ user: UserTagsConnection }>(
      'getUserTechStack',
      GET_USER_TECHSTACK_QUERY,
      { username, page, pageSize },
    );
    return res.user;
  }

  /**
   * Retrieves the badges of a user.
   *
   * @param username - The username of the user.
   * @param page - The page number for pagination.
   * @param pageSize - The number of items per page.
   *
   * @returns The user's badges.
   */
  async getUserBadges(username: string, page: number, pageSize: number) {
    const res = await this.makeRequest<{ user: Badge[] }>(
      'getUserBadges',
      GET_USER_BADGES_QUERY,
      { username },
    );
    return res.user;
  }

  /**
   * Retrieves the publications of a user.
   *
   * @param username - The username of the user.
   * @param first - The number of items to retrieve.
   * @param after - The cursor for pagination.
   * @param filter - The filter criteria for publications.
   * @param sortBy - The sorting criteria for publications.
   *
   * @returns The user's publications.
   */
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

  /**
   * Retrieves the posts of a user.
   *
   * @param username - The username of the user.
   * @param first - The number of items to retrieve.
   * @param after - The cursor for pagination.
   * @param filter - The filter criteria for posts.
   * @param sortBy - The sorting criteria for posts.
   *
   * @returns The user's posts.
   */
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

  /**
   * Retrieves the tags followed by a user.
   *
   * @param username - The username of the user.
   *
   * @returns The tags followed by the user.
   */
  async getUserFollowedTags(username: string) {
    const res = await this.makeRequest<{ user: Tag[] }>(
      'getUserFollowedTags',
      GET_USER_FOLLOWED_TAGS_QUERY,
      { username },
    );
    return res.user;
  }

  /**
   *
   * ===================MUTATIONS===================
   *
   */

  /**
   * Toggles the follow status of a user.
   *
   * @param id - The ID of the user.
   * @param username - The username of the user.
   *
   * @returns The user information.
   */
  async toggleFollowUser(id: string, username: string) {
    const res = await this.makeRequest<{ user: ToggleFollowUserPayload }>(
      'toggleFollowUser',
      TOGGLE_FOLLOW_USER_MUTATION,
      { id, username },
    );
    return res.user;
  }
}
