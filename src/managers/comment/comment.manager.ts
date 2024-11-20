import { BaseManager } from '../base.manager';
import type { HashnodeSDKClient } from '../../client';
import type {
  AddCommentInput,
  AddCommentPayload, AddReplyInput, AddReplyPayload,
  CommenterUserConnection, LikeCommentInput, LikeCommentPayload, LikeReplyInput, LikeReplyPayload,
  RemoveCommentInput,
  RemoveCommentPayload, RemoveReplyInput, RemoveReplyPayload,
  UpdateCommentInput,
  UpdateCommentPayload, UpdateReplyInput, UpdateReplyPayload,
} from '../../generated/gqlQueryTypes';
import { GET_TOP_COMMENTERS_QUERY } from './comment.queries';
import {
  ADD_COMMENT_MUTATION, ADD_REPLY_MUTATION, LIKE_COMMENT_MUTATION, LIKE_REPLY_MUTATION,
  REMOVE_COMMENT_MUTATION, REMOVE_REPLY_MUTATION,
  UPDATE_COMMENT_MUTATION, UPDATE_REPLY_MUTATION,
} from './comment.mutations';

/**
 * Manages comments operations.
 *
 * @extends BaseManager
 */
export class CommentManager extends BaseManager {
  /**
   * Creates an instance of CommentManager.
   *
   * @param client - The Hashnode SDK client.
   */
  constructor(client: HashnodeSDKClient) {
    super(client, 'CommentManager');
  }

  /**
   * Returns the top users who have most actively participated in discussions by commenting in the last 7 days
   *
   * @param after - The cursor to start the query from.
   * @param first - The number of users to return.
   *
   * @returns The top users who have most actively participated in discussions by commenting in the last 7 days.
   */
  async getTopCommenters(first: number, after?: string) {
    const res = await this.makeRequest<{
      topCommenters: CommenterUserConnection;
    }>('getTopCommenters', GET_TOP_COMMENTERS_QUERY, { first, after });
    return res.topCommenters;
  }

  /**
   *
   * ===================MUTATIONS===================
   *
   */

  /**
   * Add a comment to a post
   *
   * @param {AddCommentInput} input -  The add comment input
   *
   * @returns - The added comment
   */
  async addCommentToPost(input: AddCommentInput) {
    const res = await this.makeRequest<{ addedComment: AddCommentPayload }>(
      'addCommentToPost',
      ADD_COMMENT_MUTATION,
      {
        input,
      },
    );
    return res.addedComment.comment;
  }

  /**
   * Update a post's comment
   *
   * @param {UpdateCommentInput} input -  The update comment input
   *
   * @returns - The updated comment
   */
  async updatePostComment(input: UpdateCommentInput) {
    const res = await this.makeRequest<{
      updatedComment: UpdateCommentPayload;
    }>('updatePostComment', UPDATE_COMMENT_MUTATION, {
      input,
    });
    return res.updatedComment.comment;
  }

  /**
   * Remove a post's comment
   *
   * @param {RemoveCommentInput} input -  The remove comment input
   *
   * @returns - The removed comment
   */
  async removePostComment(input: RemoveCommentInput) {
    const res = await this.makeRequest<{
      removedComment: RemoveCommentPayload;
    }>('removePostComment', REMOVE_COMMENT_MUTATION, {
      input,
    });
    return res.removedComment.comment;
  }

  /**
   * Like a comment
   *
   * @param {LikeCommentInput} input -  The like comment input
   *
   * @returns - The liked comment
   */
  async likeComment(input: LikeCommentInput) {
    const res = await this.makeRequest<{ likedComment: LikeCommentPayload }>(
      'likeComment',
      LIKE_COMMENT_MUTATION,
      {
        input,
      },
    );
    return res.likedComment.comment;
  }

  /**
   * Like a reply
   *
   * @param {LikeReplyInput} input -  The like reply input
   *
   * @returns - The liked reply
   */
  async likeReply(input: LikeReplyInput) {
    const res = await this.makeRequest<{ likedReply: LikeReplyPayload }>(
      'likeReply',
      LIKE_REPLY_MUTATION,
      {
        input,
      },
    );
    return res.likedReply.reply;
  }

  /**
   * Add a reply
   *
   * @param {AddReplyInput} input -  The add reply input
   *
   * @returns - The added reply
   */
  async addReply(input: AddReplyInput) {
    const res = await this.makeRequest<{ addedReply: AddReplyPayload }>(
      'addReply',
      ADD_REPLY_MUTATION,
      {
        input,
      },
    );
    return res.addedReply.reply;
  }

  /**
   * Updated a reply
   *
   * @param {UpdateReplyInput} input -  The update reply input
   *
   * @returns - The updated reply
   */
  async updateReply(input: UpdateReplyInput) {
    const res = await this.makeRequest<{ updatedReply: UpdateReplyPayload }>(
      'updateReply',
      UPDATE_REPLY_MUTATION,
      {
        input,
      },
    );
    return res.updatedReply.reply;
  }

  /**
   * Removed a reply
   *
   * @param {RemoveReplyInput} input -  The remove reply input
   *
   * @returns - The removed reply
   */
  async removeReply(input: RemoveReplyInput) {
    const res = await this.makeRequest<{ removedReply: RemoveReplyPayload }>(
      'removeReply',
      REMOVE_REPLY_MUTATION,
      {
        input,
      },
    );
    return res.removedReply.reply;
  }
}
