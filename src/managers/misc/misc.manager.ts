import { BaseManager } from '../base.manager';
import type { HashnodeSDKClient } from '../../client';
import {
  GET_TAG_BY_SLUG_QUERY,
} from './misc.queries';
import type {
  FollowTagsInput,
  FollowTagsPayload,
  Tag,
  UnfollowTagsInput,
  UnfollowTagsPayload,
} from '../../generated/gqlQueryTypes';
import { FOLLOW_TAGS_MUTATION, UNFOLLOW_TAGS_MUTATION } from './misc.mutations';

/**
 * Manages random operations.
 *
 * @extends BaseManager
 */
export class MiscellaneousManager extends BaseManager {
  /**
   * Creates an instance of MiscellaneousManager.
   *
   * @param client - The Hashnode SDK client.
   */
  constructor(client: HashnodeSDKClient) {
    super(client, 'MiscellaneousManager');
  }



  /**
   * Returns tag details by its slug
   *
   * @param slug - The slug of the tag.
   *
   * @returns The tag details.
   */
  async getTagBySlug(slug: string) {
    const res = await this.makeRequest<{ tag: Tag }>(
      'getTagBySlug',
      GET_TAG_BY_SLUG_QUERY,
      { slug },
    );
    return res.tag;
  }

  /**
   *
   * ===================MUTATIONS===================
   *
   */

  /**
   * Follow tags
   *
   * @param input - The followTag input.
   *
   * @returns The tag details.
   */
  async followTags(input: FollowTagsInput) {
    const res = await this.makeRequest<{ followTag: FollowTagsPayload }>(
      'followTags',
      FOLLOW_TAGS_MUTATION,
      { input },
    );
    return res.followTag;
  }

  /**
   * Unfollow tags
   *
   * @param input - The UnFollowTag input.
   *
   * @returns The tag details.
   */
  async unfollowTags(input: UnfollowTagsInput) {
    const res = await this.makeRequest<{ unfollowTag: UnfollowTagsPayload }>(
      'unfollowTags',
      UNFOLLOW_TAGS_MUTATION,
      { input },
    );
    return res.unfollowTag;
  }
}
