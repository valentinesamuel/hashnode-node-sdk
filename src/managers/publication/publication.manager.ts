import type { HashnodeSDKClient } from '../../client';
import { BaseManager } from '../base.manager';
import type {
  Post,
  Publication,
  PublicationDraftConnectionFilter,
  PublicationPostsViaPageFilter,
  PublicationSearchableDraftConnectionFilter,
  RecommendPublicationsInput,
  RecommendPublicationsPayload,
  RemoveRecommendationInput,
  RemoveRecommendationPayload,
  SearchPostsOfPublicationFilter,
  ToggleAllowContributorEditsInput,
  ToggleAllowContributorEditsPayload,
  ToggleGptBotCrawlingInput,
  ToggleGptBotCrawlingPayload,
  ToggleTextSelectionSharerInput,
  ToggleTextSelectionSharerPayload,
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
import {
  RECOMMEND_PUBLICATIONS_MUTATION,
  TOGGLE_ALLOW_CONTRIBUTOR_EDITS_MUTATION,
  TOGGLE_GPT_BOT_CRAWLING_MUTATION,
  TOGGLE_TEXT_SELECTION_SHARER_MUTATION,
} from './publication.mutations';

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

  /**
   * Retrieves pending invites for a specific publication
   *
   * @param id - The unique identifier of the publication
   * @param host - The host domain for the publication
   * @param pageSize - Number of items to return per page
   * @param page - Page number to fetch
   *
   * @returns Promise containing an array of pending publication invites
   */
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

  /**
   * Retrieves role-based invites for a specific publication
   *
   * @param id - The unique identifier of the publication
   * @param host - The host domain for the publication
   * @param page - The page number for pagination
   * @param pageSize - The number of items per page
   *
   * @returns A promise that resolves to the publication's invites
   */
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

  /**
   * Retrieves a series from a publication based on the provided parameters
   *
   * @param id - The unique identifier of the publication
   * @param host - The host domain of the publication
   * @param slug - The URL-friendly name/identifier of the series
   * @returns A promise that resolves to the publication's series data
   */
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

  /**
   * Retrieves a list of series from a publication
   *
   * @param id - The unique identifier of the publication
   * @param host - The host URL of the publication
   * @param first - The number of series to retrieve
   * @param after - Cursor for pagination, specifies after which item to fetch
   *
   * @returns A Promise that resolves to the publication data containing the series list
   */
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

  /**
   * Retrieves drafts from a publication based on specified parameters
   *
   * @param id - The unique identifier of the publication
   * @param host - The host domain of the publication
   * @param first - The number of drafts to retrieve
   * @param after - The cursor to start retrieving drafts from
   * @param filter - Filter criteria for the draft connection
   *
   * @returns A Promise that resolves to the publication's drafts
   */
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

  /**
   * Retrieves all drafts from a publication
   *
   * @param id - The unique identifier of the publication
   * @param host - The host domain of the publication
   * @param first - The number of drafts to retrieve
   * @param after - The cursor to start retrieving drafts from
   * @param filter - Filter options for the draft search
   *
   * @returns A Promise that resolves to the publication's draft connection containing draft articles
   */
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

  /**
   * Retrieves scheduled drafts for a publication
   *
   * @param id - The unique identifier of the publication
   * @param host - The host domain of the publication
   * @param first - The number of drafts to retrieve
   * @param after - Cursor for pagination
   * @param filter - Filter criteria for the draft connection
   *
   * @returns A Promise that resolves to the publication's scheduled drafts
   */
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

  /**
   * Retrieves all scheduled drafts for a publication
   *
   * @param id - The unique identifier of the publication
   * @param host - The host domain of the publication
   * @param first - The number of records to fetch
   * @param after - The cursor for pagination
   * @param filter - Filtering options for the scheduled drafts search
   *
   * @returns A promise that resolves to the publication's scheduled drafts
   */
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

  /**
   * Retrieves a static page from a publication using the provided parameters.
   *
   * @param id - The unique identifier of the publication.
   * @param host - The host domain of the publication.
   * @param slug - The URL slug of the static page.
   *
   * @returns {Promise<any>} A promise that resolves to the static page content.
   */
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

  /**
   * Retrieves static pages associated with a publication.
   *
   * @param id - The unique identifier of the publication
   * @param host - The host domain of the publication
   * @param first - The number of static pages to retrieve
   * @param after - The cursor for pagination
   *
   * @returns A Promise that resolves to an array of static pages for the publication
   */
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

  /**
   * Retrieves submitted drafts for a specific publication.
   *
   * @param id - The unique identifier of the publication.
   * @param host - The host domain of the publication.
   * @param first - The number of drafts to retrieve.
   * @param after - The cursor for pagination.
   * @param filter - Filter criteria for the draft connection.
   *
   * @returns A Promise that resolves to the submitted drafts of the publication.
   */
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

  /**
   * Retrieves publications that are recommending a specific publication
   *
   * @param id - The unique identifier of the publication
   * @param host - The host domain of the publication
   * @param page - The page number for pagination
   * @param pageSize - The number of items per page
   *
   * @returns A Promise that resolves to an array of recommending publications
   */
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

  /**
   * Retrieves recommended publications for a specific publication.
   *
   * @param {string} id - The unique identifier of the publication.
   * @param {string} host - The host domain of the publication.
   *
   * @returns  A promise that resolves to an array of recommended publications.
   */
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

  /**
   * Retrieves a redirected post from a publication
   *
   * @param id - The ID of the publication
   * @param host - The host URL of the publication
   * @param slug - The slug of the post to retrieve
   *
   * @returns Promise containing the redirected post data
   */
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

  /**
   * Retrieves a specific post from a publication
   *
   * @param id - The ID of the publication
   * @param host - The host URL of the publication
   * @param slug - The unique slug/URL segment of the post
   *
   * @returns Promise containing the retrieved publication post
   */
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

  /**
   * Retrieves paginated posts for a specific publication
   *
   * @param id - The unique identifier of the publication
   * @param host - The host domain of the publication
   * @param first - The number of posts to retrieve per page
   * @param after - The cursor to fetch records after
   * @param filter - The filter criteria for the posts
   *
   * @returns A Promise containing the paginated posts for the publication
   */
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

  /**
   * Retrieves the pinned post of a publication.
   *
   * @param {string} id - The unique identifier of the publication.
   * @param {string} host - The host domain of the publication.
   *
   * @returns  A promise that resolves to the pinned post of the publication.
   */
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

  // =======================MUTATIONS=======================

  /**
   * Recommend publications
   *
   * @param input - The RecommendPublicationsInput.
   *
   * @returns The recommended publications.
   */
  async recommendPublication(input: RecommendPublicationsInput) {
    const res = await this.makeRequest<{
      recommendPublications: RecommendPublicationsPayload;
    }>('recommendPublication', RECOMMEND_PUBLICATIONS_MUTATION, { input });
    return res.recommendPublications.recommendedPublications;
  }

  /**
   * Remove recommendation
   *
   * @param {RemoveRecommendationInput} input - The RemoveRecommendationInput.
   *
   * @returns The recommended publications.
   */
  async removeRecommendation(input: RemoveRecommendationInput) {
    const res = await this.makeRequest<{
      recommendPublications: RemoveRecommendationPayload;
    }>('removeRecommendation', RECOMMEND_PUBLICATIONS_MUTATION, { input });
    return res.recommendPublications.recommendedPublication;
  }

  /**
   * Toggle allowContributorEdits
   *
   * @param {ToggleAlloqContrinutorEditsInput} input - The ToggleAlloqContrinutorEditsInput!
   *
   * @returns The publication details.
   */
  async toggleAllowContributorEdits(input: ToggleAllowContributorEditsInput) {
    const res = await this.makeRequest<{
      toggleAllowContributorEdits: ToggleAllowContributorEditsPayload;
    }>('toggleAllowContributorEdits', TOGGLE_ALLOW_CONTRIBUTOR_EDITS_MUTATION, {
      input,
    });
    return res.toggleAllowContributorEdits.publication;
  }

  /**
   * Toggle textSelectionSharerMutation
   *
   * @param { ToggleTextSelectionSharerInput } input - The ToggleTextSelectionSharerInput
   *
   * @returns - The publication details
   */
  async toggleTextSelectionSharer(input: ToggleTextSelectionSharerInput) {
    const res = await this.makeRequest<{
      toggleTextSelectionSharer: ToggleTextSelectionSharerPayload;
    }>('toggleTextSelectionSharer', TOGGLE_TEXT_SELECTION_SHARER_MUTATION, {
      input,
    });
    return res.toggleTextSelectionSharer.publication;
  }

  /**
   * Toggle GPTBotCrawlingMutation
   *
   * @param {ToggleGPTBotCrawlingInput} input - The toggleGPTBotCrawlingInput
   *
   * @returns - The publication details
   */
  async toggleGPTBotCrawling(input: ToggleGptBotCrawlingInput) {
    const res = await this.makeRequest<{
      toggleGPTBotCrawlingInput: ToggleGptBotCrawlingPayload;
    }>('toggleGPTBotCrawlingInput', TOGGLE_GPT_BOT_CRAWLING_MUTATION, {
      input,
    });
    return res.toggleGPTBotCrawlingInput.publication;
  }
}
