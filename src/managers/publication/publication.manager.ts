import type { HashnodeSDKClient } from '../../client';
import { BaseManager } from '../base.manager';
import type { Post, Publication, SearchPostsOfPublicationFilter } from '../../generated/gqlQueryTypes';
import { SEARCH_POSTS_OF_PUBLICATION } from '../posts/post.queries';
import { GET_PUBLICATION_QUERY } from './publication.queries';

export class PublicationManager extends BaseManager {
  /**
   * Creates an instance of PublicationManager.
   * @param client - The HashnodeSDKClient instance.
   */
  constructor(client: HashnodeSDKClient) {
    super(client, 'PublicationManager');
  }

  /**
   * Retrieves the publication by its ID.
   *
   * @param publicationId - The ID of the publication.
   * @param host - The host of the publication.
   *
   * @returns A promise that resolves to the publication.
   */
  async getPublication(publicationId: string, host?: string) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublication',
      GET_PUBLICATION_QUERY,
      { id: publicationId, host },
    );
    return res.publication;
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
}
