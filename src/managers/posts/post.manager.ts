import type { HashnodeSDKClient } from '../../client';
import { BaseManager } from '../base.manager';
import {
  type Draft,
  type Post,
  PostCommenterSortBy,
  PostCommentSortBy,
  type PostLikerFilter,
  type SearchPostsOfPublicationFilter,
} from '../../generated/gqlQueryTypes';
import {
  GET_DRAFT_POST_QUERY,
  GET_POST_COMMENTERS,
  GET_POST_COMMENTS,
  GET_POST_LIKERS,
  GET_POST_PUBLICATION_QUERY,
  GET_POST_QUERY, SEARCH_POSTS_OF_PUBLICATION,
} from './post.queries';

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
   * Retrieves the comments of a post
   *
   * @param postId - The ID of the post
   * @param first - The number of comments to retrieve
   * @param after - The cursor for pagination
   * @param sortBy - Sort comments by TOP or RECENT
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
   * Retrieves the commenters of a post
   *
   * @param postId - The ID of the post
   * @param first - The number of comments to retrieve
   * @param after - The cursor for pagination
   * @param sortBy - Sort comments by TOP or RECENT
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
   * Retrieves the likers of a post
   *
   * @param postId - The ID of the post
   * @param first - The number of post likers to retrieve
   * @param after - The cursor for pagination
   * @param filter - Filter post likers by userIDs
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
   * Retrieves a paginated list of posts based on search query for a particular publication id.
   *
   * @param first - The number of post likers to retrieve
   * @param after - The cursor for pagination
   * @param filter - Filter post likers by userIDs
   *
   * @return The paginated posts that matches the filter
   */
  async searchPostsByPublication(
    first: number,
    after: string,
    filter: SearchPostsOfPublicationFilter,
  ) {
    const res = await this.makeRequest<{ post: Post }>(
      'searchPostsByPublication',
      SEARCH_POSTS_OF_PUBLICATION,
      { first, after, filter },
    );
    return res.post;
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
      { postId: draftID },
    );
    return res.draft;
}
}
