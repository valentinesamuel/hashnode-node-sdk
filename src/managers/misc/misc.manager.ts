import { BaseManager } from '../base.manager';
import type { HashnodeSDKClient } from '../../client';
import {
  GET_TAG_BY_SLUG_QUERY,
  GET_TOP_COMMENTERS_QUERY,
} from './misc.queries';
import type {
  CommenterUserConnection,
  Tag,
} from '../../generated/gqlQueryTypes';

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
}
