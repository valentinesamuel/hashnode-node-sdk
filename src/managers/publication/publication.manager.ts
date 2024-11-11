import type { HashnodeSDKClient } from '../../client';
import { BaseManager } from '../base.manager';
import type {
  Post,
  Publication,
  PublicationDraftConnectionFilter,
  PublicationPostsViaPageFilter,
  PublicationSearchableDraftConnectionFilter,
  SearchPostsOfPublicationFilter,
} from '../../generated/gqlQueryTypes';
import {
  GET_ALL_PUBLICATION_DRAFTS_QUERY,
  GET_ALL_PUBLICATION_SCHEDULED_DRAFTS_QUERY,
  GET_PUBLICATION_DRAFT_QUERY,
  GET_PUBLICATION_PENDING_INVITES,
  GET_PUBLICATION_PINNED_POST,
  GET_PUBLICATION_POST,
  GET_PUBLICATION_POSTS_VIA_PAGE,
  GET_PUBLICATION_QUERY,
  GET_PUBLICATION_RECOMMENDED_PUBLICATION_QUERY,
  GET_PUBLICATION_RECOMMENDING_PUBLICATION_QUERY,
  GET_PUBLICATION_REDIRECTED_POST_QUERY,
  GET_PUBLICATION_ROLE_BASED_INVITE_QUERY,
  GET_PUBLICATION_SCHEDULED_DRAFT_QUERY,
  GET_PUBLICATION_SERIES_LIST_QUERY,
  GET_PUBLICATION_SERIES_QUERY,
  GET_PUBLICATION_STATIC_PAGE_QUERY,
  GET_PUBLICATION_STATIC_PAGES_QUERY,
  SEARCH_POSTS_OF_PUBLICATION,
} from './publication.queries';

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

  async getPublicationPendingInvites(
    id: string,
    host: string,
    pageSize: number,
    page: number,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationPendingInvites',
      GET_PUBLICATION_PENDING_INVITES,
      { id, host, pageSize, page },
    );
    return res.publication.invites;
  }

  async getPublicationRoleBasedInvites(
    id: string,
    host: string,
    page: number,
    pageSize: string,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationRoleBasedInvites',
      GET_PUBLICATION_ROLE_BASED_INVITE_QUERY,
      {
        id,
        host,
        pageSize,
        page,
      },
    );
    return res.publication.invites;
  }

  async getPublicationSeries(id: string, host: string, slug: string) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationSeries',
      GET_PUBLICATION_SERIES_QUERY,
      {
        id,
        host,
        slug,
      },
    );
    return res.publication.series;
  }

  async getPublicationSeriesList(
    id: string,
    host: string,
    first: number,
    after: string,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationSeriesList',
      GET_PUBLICATION_SERIES_LIST_QUERY,
      { id, host, first, after },
    );
    return res.publication;
  }

  async getPublicationDrafts(
    id: string,
    host: string,
    first: number,
    after: string,
    filter: PublicationDraftConnectionFilter,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationDrafts',
      GET_PUBLICATION_DRAFT_QUERY,
      {
        id,
        host,
        first,
        after,
        filter,
      },
    );
    return res.publication.drafts;
  }

  async getAllPublicationDraft(
    id: string,
    host: string,
    first: number,
    after: string,
    filter: PublicationSearchableDraftConnectionFilter,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getAllPublicationDraft',
      GET_ALL_PUBLICATION_DRAFTS_QUERY,
      { id, host, first, after, filter },
    );
    return res.publication.allDrafts;
  }

  async getPublicationScheduledDrafts(
    id: string,
    host: string,
    first: number,
    after: string,
    filter: PublicationDraftConnectionFilter,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationScheduledDrafts',
      GET_PUBLICATION_SCHEDULED_DRAFT_QUERY,
      {
        id,
        host,
        first,
        after,
        filter,
      },
    );
    return res.publication.scheduledDrafts;
  }

  async getAllPublicationScheduledDrafts(
    id: string,
    host: string,
    first: number,
    after: string,
    filter: PublicationSearchableDraftConnectionFilter,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getAllPublicationScheduledDrafts',
      GET_ALL_PUBLICATION_SCHEDULED_DRAFTS_QUERY,
      { id, host, first, after, filter },
    );
    return res.publication.allScheduledDrafts;
  }

  async getPublicationStaticPage(id: string, host: string, slug: string) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationStaticPage',
      GET_PUBLICATION_STATIC_PAGE_QUERY,
      {
        id,
        host,
        slug,
      },
    );
    return res.publication.staticPage;
  }

  async getPublicationStaticPages(
    id: string,
    host: string,
    first: string,
    after: string,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationStaticPages',
      GET_PUBLICATION_STATIC_PAGES_QUERY,
      { id, host, first, after },
    );
    return res.publication.staticPages;
  }

  async getPublicationSubmittedDrafts(
    id: string,
    host: string,
    first: number,
    after: string,
    filter: PublicationDraftConnectionFilter,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationSubmittedDrafts',
      GET_PUBLICATION_SCHEDULED_DRAFT_QUERY,
      {
        id,
        host,
        first,
        after,
        filter,
      },
    );
    return res.publication.submittedDrafts;
  }

  async getPublicationRecommendingPublication(
    id: string,
    host: string,
    page: number,
    pageSize: string,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationRecommendingPublication',
      GET_PUBLICATION_RECOMMENDING_PUBLICATION_QUERY,
      {
        id,
        host,
        pageSize,
        page,
      },
    );
    return res.publication.recommendingPublications;
  }

  async getPublicationRecommendedPublication(id: string, host: string) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationRecommendedPublication',
      GET_PUBLICATION_RECOMMENDED_PUBLICATION_QUERY,
      {
        id,
        host,
      },
    );
    return res.publication.recommendedPublications;
  }

  async getPublicationRedirectedPost(id: string, host: string, slug: string) {
    const res = await this.makeRequest<{ publicatin: Publication }>(
      'getPublicationRedirectedPost',
      GET_PUBLICATION_REDIRECTED_POST_QUERY,
      {
        id,
        host,
        slug,
      },
    );
    return res.publicatin.redirectedPost;
  }

  async getPublicationPost(id: string, host: string, slug: string) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationPost',
      GET_PUBLICATION_POST,
      {
        id,
        host,
        slug,
      },
    );
    return res.publication.post;
  }

  async getPublicationPostsViaPage(
    id: string,
    host: string,
    first: number,
    after: string,
    filter: PublicationPostsViaPageFilter,
  ) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationPostsViaPage',
      GET_PUBLICATION_POSTS_VIA_PAGE,
      {
        id,
        host,
        first,
        after,
        filter,
      },
    );
    return res.publication.postsViaPage;
  }

  async getPublicationPinnedPost(id: string, host: string) {
    const res = await this.makeRequest<{ publication: Publication }>(
      'getPublicationPinnedPost',
      GET_PUBLICATION_PINNED_POST,
      {
        id,
        host,
      },
    );
    return res.publication.pinnedPost;
  }
}
