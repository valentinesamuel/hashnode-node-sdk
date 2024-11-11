import type { HashnodeSDKClient } from '../../client';
import { BaseManager } from '../base.manager';
import {
  type Draft,
  type FeedFilter,
  type FeedPostConnection,
  type Post,
  PostCommenterSortBy,
  PostCommentSortBy,
  type PostLikerFilter,
} from '../../generated/gqlQueryTypes';
import {
  GET_DRAFT_POST_QUERY,
  GET_FEED_POST,
  GET_POST_COMMENTERS,
  GET_POST_COMMENTS,
  GET_POST_LIKERS,
  GET_POST_PUBLICATION_QUERY,
  GET_POST_QUERY,
  GET_SCHEDULED_POST_QUERY,
} from './post.queries';

/**
 * A manager class for handling post-related operations via the Hashnode SDK.
 * Extends the BaseManager class to provide post-specific functionality.
 *
 * @extends BaseManager
 */
export class PostManager extends BaseManager {
  /**
   * Creates an instance of PostManager.
   * @param client - The HashnodeSDKClient instance.
   */
  constructor(client: HashnodeSDKClient) {
    super(client, 'PostManager');
  }

  /**
   * Retrieves a post by its ID.
   *
   * @param postId - The ID of the post.
   *
   * @returns A promise that resolves to the post.
   */
  async getPost(postId: string) {
    const res = await this.makeRequest<{ post: Post }>(
      'getPost',
      GET_POST_QUERY,
      { postId },
    );
    return res.post;
  }

  /**
   * Retrieves the publication of a post.
   *
   * @param postId - The ID of the post.
   *
   * @returns A promise that resolves to the publication of the post.
   */
  async getPostPublication(postId: string) {
    const res = await this.makeRequest<{ post: Post }>(
      'getPostPublication',
      GET_POST_PUBLICATION_QUERY,
      { postId },
    );
    return res.post.publication;
  }

  /**
   * Retrieves comments for a specific post
   *
   * @param postId - The unique identifier of the post
   * @param first - The number of comments to retrieve
   * @param after - Cursor for pagination
   * @param sortBy - Sort criteria for the comments
   *
   * @returns Promise containing an array of comments for the specified post
   */
  async getPostComments(
    postId: string,
    first: number,
    after: string,
    sortBy: PostCommentSortBy,
  ) {
    const res = await this.makeRequest<{ post: Post }>(
      'getPostComments',
      GET_POST_COMMENTS,
      { postId, first, after, sortBy },
    );
    return res.post.comments;
  }

  /**
   * Retrieves commenters for a specific post with pagination and sorting options.
   *
   * @param postId - The unique identifier of the post to get commenters from
   * @param first - The number of commenters to retrieve in one request
   * @param after - The cursor for pagination, representing the position after which to fetch commenters
   * @param sortBy - The sorting criteria for the commenters list
   *
   * @returns A Promise that resolves to an array of commenters for the specified post
   */
  async getPostCommenters(
    postId: string,
    first: number,
    after: string,
    sortBy: PostCommenterSortBy,
  ) {
    const res = await this.makeRequest<{ post: Post }>(
      'getPostCommenters',
      GET_POST_COMMENTERS,
      { postId, first, after, sortBy },
    );
    return res.post.commenters;
  }

  /**
   * Retrieves users who have liked a specific post
   *
   * @param postId - The unique identifier of the post
   * @param first - The number of likers to return
   * @param after - Cursor for pagination, specifying where to start fetching likers
   * @param filter - Filter criteria for post likers
   *
   * @returns Promise containing an array of users who liked the post
   */
  async getPostLikers(
    postId: string,
    first: number,
    after: string,
    filter: PostLikerFilter,
  ) {
    const res = await this.makeRequest<{ post: Post }>(
      'getPostLikers',
      GET_POST_LIKERS,
      { postId, first, after, filter },
    );
    return res.post.likedBy;
  }

  /**
   * Retrieves a draft post
   *
   * @param draftID - The draft ID of the draft post
   *
   * @return The draft post
   */
  async getDraftPostQuery(draftID: string) {
    const res = await this.makeRequest<{ draft: Draft }>(
      'getDraftPostQuery',
      GET_DRAFT_POST_QUERY,
      { id: draftID },
    );
    return res.draft;
  }

  /**
   * Retrieves a scheduled post
   *
   * @param scheduledPostID - The ID of the scheduled post
   *
   * @return The scheduled post
   */
  async getScheduledPost(scheduledPostID: string) {
    const res = await this.makeRequest<{ post: Post }>(
      'getScheduledPost',
      GET_SCHEDULED_POST_QUERY,
      { id: scheduledPostID },
    );
    return res.post;
  }

  /**
   * Retrieves feed posts based on specified parameters
   *
   * @param first - The number of posts to retrieve
   * @param after - Cursor for pagination, representing the ID after which to fetch posts
   * @param filter - Filter criteria for the feed posts
   *
   * @returns Promise resolving to a FeedPostConnection object containing the feed posts
   */
  async getFeedPosts(first: number, after: string, filter: FeedFilter) {
    const res = await this.makeRequest<{ feedPost: FeedPostConnection }>(
      'getFeedPosts',
      GET_FEED_POST,
      {
        first,
        after,
        filter,
      },
    );
    return res.feedPost;
  }
}
