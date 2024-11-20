import { BaseManager } from '../base.manager';
import type { HashnodeSDKClient } from '../../client';
import {
  GET_DOCUMENTATION_PROJECT_CUSTOM_PAGE_QUERY,
  GET_DOCUMENTATION_PROJECT_CUSTOM_PAGES,
  GET_DOCUMENTATION_PROJECT_DEFAULT_GUIDE_QUERY,
  GET_DOCUMENTATION_PROJECT_GUIDE_QUERY,
  GET_DOCUMENTATION_PROJECT_GUIDES_QUERY,
  GET_DOCUMENTATION_PROJECT_NAVIGATION_QUERY,
  GET_DOCUMENTATION_PROJECT_PENDING_INVITES,
  GET_DOCUMENTATION_PROJECT_PUBLISHED_GUIDE_QUERY,
  GET_DOCUMENTATION_PROJECT_PUBLISHED_GUIDES_QUERY,
  GET_DOCUMENTATION_PROJECT_QUERY,
  GET_DOCUMENTATION_PROJECT_V2_MEMBER_QUERY,
  GET_DOCUMENTATION_PROJECT_VIEWS_QUERY,
  GET_DOCUMENTATION_PROJECT_VISITORS_QUERY,
  SEARCH_DOCUMENTATION_PROJECT_USERS_QUERY,
} from './documenationProject.queries';
import type {
  CreateDocumentationPageDraftInput,
  CreateDocumentationPageDraftPayload,
  CreateDocumentationProjectInput,
  CreateDocumentationProjectPayload,
  CreateDocumentationSectionInput,
  CreateDocumentationSectionPayload,
  DocumentationProject,
  DocumentationProjectMemberConnectionFilter,
  DocumentationProjectSearchUsersInput,
  MoveDocumentationSidebarItemInput,
  MoveDocumentationSidebarItemPayload,
  ProjectViewsFilter,
  ProjectViewsGroupBy,
  ProjectViewsOptions,
  ProjectViewsSortBy,
  ProjectVisitorsFilter,
  ProjectVisitorsGroupBy,
  ProjectVisitorsOptions,
  PublishDocumentationPageDraftInput,
  PublishDocumentationPageDraftPayload,
  RemoveDocumentationSidebarItemInput,
  RemoveDocumentationSidebarItemPayload,
  RenameDocumentationSidebarItemInput,
  RenameDocumentationSidebarItemPayload,
  SaveDocumentationPageDraftContentInput,
  SaveDocumentationPageDraftContentPayload,
  SetDocumentationSidebarItemVisibilityInput,
  SetDocumentationSidebarItemVisibilityPayload,
  UpdateDocumentationAppearanceInput,
  UpdateDocumentationAppearancePayload,
  UpdateDocumentationGeneralSettingsInput,
  UpdateDocumentationGeneralSettingsPayload,
  UpdateDocumentationIntegrationsInput,
  UpdateDocumentationIntegrationsPayload,
  UpdateDocumentationPageSettingsInput,
  UpdateDocumentationPageSettingsPayload,
  UpdateDocumentationSectionInput,
  UpdateDocumentationSectionPayload,
} from '../../generated/gqlQueryTypes';
import {
  CREATE_DOCUMENTATION_PAGE_DRAFT,
  CREATE_DOCUMENTATION_PROJECT,
  CREATE_DOCUMENTATION_SECTION_MUTATION,
  MOVE_DOCUMENTATION_SIDEBAR_ITEM_MUTATION,
  PUBLISH_DOCUMENTATION_PAGE_DRAFT,
  REMOVE_DOCUMENTATION_SIDEBAR_ITEM_MUTATION,
  RENAME_DOCUMENTATION_SIDEBAR_ITEM_MUTATION,
  SAVE_DOCUMENTATION_PAGE_DRAFT_CONTENT,
  SET_DOCUMENTATION_SIDEBAR_ITEM_VISIBILITY_MUTATION,
  UPDATE_DOCUMENTATION_APPEARANCE,
  UPDATE_DOCUMENTATION_GENERAL_SETTINGS,
  UPDATE_DOCUMENTATION_INTEGRATIONS,
  UPDATE_DOCUMENTATION_PAGE_SETTINGS,
  UPDATE_DOCUMENTATION_SECTION_MUTATION,
} from './documentationProject.mutation';

/**
 * Manages documentation project-related operations in the Hashnode SDK.
 * This class provides comprehensive functionality for interacting with documentation projects,
 * including fetching project details, managing members, guides, custom pages, analytics, and navigation.
 *
 * Extends the BaseManager class for core functionality and API communication.
 * @extends BaseManager
 */
export class DocumentationProjectManager extends BaseManager {
  /**
   * Creates an instance of the DocumentationProject manager.
   * @param {HashnodeSDKClient} client - The Hashnode SDK client instance used for making API requests.
   */
  constructor(client: HashnodeSDKClient) {
    super(client, 'DocumentationProjectManager');
  }

  /**
   * Retrieves a documentation project by its ID and host.
   *
   * @param documentationProjectId - The unique identifier of the documentation project to retrieve
   * @param host - The host where the documentation project is located
   *
   * @returns A Promise that resolves to the DocumentationProject object
   */
  async getDocumentationProject(documentationProjectId: string, host: string) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>('getDocumentationProject', GET_DOCUMENTATION_PROJECT_QUERY, {
      id: documentationProjectId,
      host,
    });
    return res.documentationProject;
  }

  /**
   * Retrieves members of a documentation project (v2) with pagination and filtering options
   *
   * @param pageSize - The number of members to return per page
   * @param page - The page number to retrieve
   * @param filter - Filter criteria for documentation project members
   *
   * @returns A Promise that resolves to the members of the documentation project
   */
  async getDocumentationProjectV2Members(
    pageSize: number,
    page: number,
    filter: DocumentationProjectMemberConnectionFilter,
  ) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'getDocumentationProjectV2Members',
      GET_DOCUMENTATION_PROJECT_V2_MEMBER_QUERY,
      { pageSize, page, filter },
    );
    return res.documentationProject.membersV2;
  }

  /**
   * Retrieves custom pages from a documentation project with pagination support.
   *
   * @param pageSize - The number of items per page
   * @param page - The page number to retrieve
   *
   * @returns A promise that resolves to an array of custom pages from the documentation project
   */
  async getDocumentationProjectCustomPages(pageSize: number, page: number) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'getDocumentationProjectCustomPages',
      GET_DOCUMENTATION_PROJECT_CUSTOM_PAGES,
      { pageSize, page },
    );
    return res.documentationProject.customPages;
  }

  /**
   * Retrieves a custom page from a documentation project using its slug
   *
   * @param slug - The unique identifier/slug of the custom page
   *
   * @returns A Promise that resolves to the custom page content from the documentation project
   */
  async getDocumentationProjectCustomPage(slug: string) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'getDocumentationProjectCustomPage',
      GET_DOCUMENTATION_PROJECT_CUSTOM_PAGE_QUERY,
      {
        slug,
      },
    );
    return res.documentationProject.customPage;
  }

  /**
   * Retrieves pending invites for a documentation project with pagination support.
   *
   * @param pageSize - The number of items to return per page
   * @param page - The page number to retrieve
   *
   * @returns A promise that resolves to an array of pending invites for the documentation project
   */
  async getDocumentationProjectPendingInvites(pageSize: number, page: number) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'getDocumentationProjectPendingInvites',
      GET_DOCUMENTATION_PROJECT_PENDING_INVITES,
      { pageSize, page },
    );
    return res.documentationProject.pendingInvites;
  }

  /**
   * Retrieves a documentation project guide.
   *
   * @param documentationProjectId - The unique identifier of the documentation project.
   * @param slug - The slug identifier for the specific guide.
   *
   * @returns A Promise that resolves to the guide content of the documentation project.
   */
  async getDocumentationProjectGuide(
    documentationProjectId: string,
    slug: string,
  ) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>('getDocumentationProjectGuide', GET_DOCUMENTATION_PROJECT_GUIDE_QUERY, {
      id: documentationProjectId,
      slug,
    });
    return res.documentationProject.guide;
  }

  /**
   * Retrieves guides for a specific documentation project.
   *
   * @param documentationProjectId - The unique identifier of the documentation project
   *
   * @returns A promise that resolves to an array of guides associated with the documentation project
   */
  async getDocumentationProjectGuides(documentationProjectId: string) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'getDocumentationProjectGuides',
      GET_DOCUMENTATION_PROJECT_GUIDES_QUERY,
      {
        id: documentationProjectId,
      },
    );
    return res.documentationProject.guides;
  }

  /**
   * Retrieves a published guide from a documentation project.
   *
   * @param documentationProjectId - The ID of the documentation project.
   * @param slug - The slug/URL identifier of the guide.
   *
   * @returns {Promise<PublishedGuide} A promise that resolves with the published guide data.
   */
  async getDocumentationProjectPublishedGuide(
    documentationProjectId: string,
    slug: string,
  ) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'getDocumentationProjectPublishedGuide',
      GET_DOCUMENTATION_PROJECT_PUBLISHED_GUIDE_QUERY,
      {
        id: documentationProjectId,
        slug,
      },
    );
    return res.documentationProject.publishedGuide;
  }

  /**
   * Retrieves the published guides for a specific documentation project.
   *
   * @param documentationProjectId - The unique identifier of the documentation project
   *
   * @returns A Promise that resolves to an array of published guides associated with the documentation project
   */
  async getDocumentationProjectPublishedGuides(documentationProjectId: string) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'getDocumentationProjectPublishedGuides',
      GET_DOCUMENTATION_PROJECT_PUBLISHED_GUIDES_QUERY,
      {
        id: documentationProjectId,
      },
    );
    return res.documentationProject.publishedGuides;
  }

  /**
   * Retrieves the default guide of a documentation project.
   *
   * @param documentationProjectId - The unique identifier of the documentation project
   *
   * @returns A Promise that resolves to the default guide of the documentation project
   */
  async getDocumentationProjectDefaultGuide(documentationProjectId: string) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'getDocumentationProjectDefaultGuide',
      GET_DOCUMENTATION_PROJECT_DEFAULT_GUIDE_QUERY,
      {
        id: documentationProjectId,
      },
    );
    return res.documentationProject.defaultGuide;
  }

  /**
   * Retrieves views analytics for a documentation project
   *
   * @param documentationProjectId - The unique identifier of the documentation project
   * @param first - Number of records to fetch
   * @param after - Cursor for pagination
   * @param filter - Filter criteria for the project views
   * @param groupBy - Grouping criteria for the project views
   * @param sortBy - Sorting criteria for the project views
   * @param options - Additional options for fetching project views
   *
   * @returns Promise that resolves to the documentation project views analytics
   */
  async getDocumentationProjectViews(
    documentationProjectId: string,
    first: number,
    after: string,
    filter: ProjectViewsFilter,
    groupBy: ProjectViewsGroupBy,
    sortBy: ProjectViewsSortBy,
    options: ProjectViewsOptions,
  ) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>('getDocumentationProjectViews', GET_DOCUMENTATION_PROJECT_VIEWS_QUERY, {
      id: documentationProjectId,
      first,
      after,
      filter,
      groupBy,
      sortBy,
      options,
    });
    return res.documentationProject.analytics.views;
  }

  /**
   * Retrieves visitor analytics for a documentation project
   *
   * @param documentationProjectId - The unique identifier of the documentation project
   * @param first - Number of records to fetch
   * @param after - Cursor for pagination
   * @param filter - Filter criteria for visitors data
   * @param groupBy - Grouping criteria for visitors data
   * @param options - Additional options for the visitors query
   *
   * @returns Promise containing the visitors analytics data
   */
  async getDocumentationProjectVisitors(
    documentationProjectId: string,
    first: number,
    after: string,
    filter: ProjectVisitorsFilter,
    groupBy: ProjectVisitorsGroupBy,
    options: ProjectVisitorsOptions,
  ) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'getDocumentationProjectViews',
      GET_DOCUMENTATION_PROJECT_VISITORS_QUERY,
      {
        id: documentationProjectId,
        first,
        after,
        filter,
        groupBy,
        options,
      },
    );
    return res.documentationProject.analytics.visitors;
  }

  /**
   * Retrieves the navigation structure for a documentation project.
   *
   * @returns {Promise<any>} A promise that resolves to the navigation data of the documentation project.
   */
  async getDocumentationProjectNavigation() {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'getDocumentationProjectNavigation',
      GET_DOCUMENTATION_PROJECT_NAVIGATION_QUERY,
      {},
    );
    return res.documentationProject.navigation;
  }

  /**
   * Searches for users within a documentation project.
   *
   * @param input - The search parameters for finding users in the documentation project.
   *
   * @returns {Promise<Array>} A promise that resolves to an array of users matching the search criteria.
   */
  async searchDocumentationProjectUsers(
    input: DocumentationProjectSearchUsersInput,
  ) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>(
      'searchDocumentationProjectUsers',
      SEARCH_DOCUMENTATION_PROJECT_USERS_QUERY,
      { input },
    );
    return res.documentationProject.searchUsers;
  }

  /**
   * =================MUTATIONS=================
   * */

  /**
   * Move documentation sidebar project item
   *
   * @param input - The input.
   *
   * @returns  The documentation sidebar project item.
   */
  async moveDocumentationSidebarItem(input: MoveDocumentationSidebarItemInput) {
    const res = await this.makeRequest<{
      documentationSidebar: MoveDocumentationSidebarItemPayload;
    }>(
      'moveDocumentationSidebarItem',
      MOVE_DOCUMENTATION_SIDEBAR_ITEM_MUTATION,
      { input },
    );
    return res.documentationSidebar.guide;
  }

  /**
   * Set documentation sidebar project item visibility
   *
   * @param input - The input.
   *
   * @returns The documentation sidebar project item.
   */
  async setDocumentationSidebarItemVisibility(
    input: SetDocumentationSidebarItemVisibilityInput,
  ) {
    const res = await this.makeRequest<{
      documentationSidebar: SetDocumentationSidebarItemVisibilityPayload;
    }>(
      'setDocumentationSidebarItemVisibility',
      SET_DOCUMENTATION_SIDEBAR_ITEM_VISIBILITY_MUTATION,
      { input },
    );
    return res.documentationSidebar.guide;
  }

  /**
   * Rename documentation sidebar project item
   *
   * @param input - The input.
   *
   * @returns The documentation sidebar project item.
   */
  async renameDocumentationSidebarItem(
    input: RenameDocumentationSidebarItemInput,
  ) {
    const res = await this.makeRequest<{
      documentationSidebar: RenameDocumentationSidebarItemPayload;
    }>(
      'renameDocumentationSidebarItem',
      RENAME_DOCUMENTATION_SIDEBAR_ITEM_MUTATION,
      { input },
    );
    return res.documentationSidebar.guide;
  }

  /**
   * Remove documentation sidebar project item
   *
   * @param input - The input.
   *
   * @returns The documentation sidebar project item.
   */
  async removeDocumentationSidebarItem(
    input: RemoveDocumentationSidebarItemInput,
  ) {
    const res = await this.makeRequest<{
      documentationSidebar: RemoveDocumentationSidebarItemPayload;
    }>(
      'removeDocumentationSidebarItem',
      REMOVE_DOCUMENTATION_SIDEBAR_ITEM_MUTATION,
      { input },
    );
    return res.documentationSidebar.guide;
  }

  /**
   * Create a section in a documentation guide
   *
   * @param input - The input.
   *
   * @returns The documentation guide.
   */
  async createDocumentationSection(input: CreateDocumentationSectionInput) {
    const res = await this.makeRequest<{
      documentation: CreateDocumentationSectionPayload;
    }>('createDocumentationSection', CREATE_DOCUMENTATION_SECTION_MUTATION, {
      input,
    });
    return res.documentation.guide;
  }

  /**
   * Update a section in a documentation guide
   *
   * @param input - The input.
   *
   * @returns The documentation guide.
   */
  async updateDocumentationSection(input: UpdateDocumentationSectionInput) {
    const res = await this.makeRequest<{
      documentation: UpdateDocumentationSectionPayload;
    }>('updateDocumentationSection', UPDATE_DOCUMENTATION_SECTION_MUTATION, {
      input,
    });
    return res.documentation.guide;
  }

  /**
   * Create a draft documentation guide
   *
   * @param input - The input.
   *
   * @returns The draft documentation guide.
   */
  async createDocumentationPageDraft(input: CreateDocumentationPageDraftInput) {
    const res = await this.makeRequest<{
      documentation: CreateDocumentationPageDraftPayload;
    }>('createDocumentationPageDraft', CREATE_DOCUMENTATION_PAGE_DRAFT, {
      input,
    });
    return res.documentation.guide;
  }

  /**
   * Update a documentation page settings
   *
   * @param input - The input.
   *
   * @returns The draft documentation guide.
   */
  async updateDocumentationPageSettings(
    input: UpdateDocumentationPageSettingsInput,
  ) {
    const res = await this.makeRequest<{
      documentation: UpdateDocumentationPageSettingsPayload;
    }>('updateDocumentationPageSettings', UPDATE_DOCUMENTATION_PAGE_SETTINGS, {
      input,
    });
    return res.documentation.guide;
  }

  /**
   * Save documentation page draft contents
   *
   * @param input - The input.
   *
   * @returns The draft documentation guide.
   */
  async saveDocumentationPageDraftContent(
    input: SaveDocumentationPageDraftContentInput,
  ) {
    const res = await this.makeRequest<{
      documentation: SaveDocumentationPageDraftContentPayload;
    }>(
      'saveDocumentationPageDraftContent',
      SAVE_DOCUMENTATION_PAGE_DRAFT_CONTENT,
      {
        input,
      },
    );
    return res.documentation.page;
  }

  /**
   * Publish documentation page draft
   *
   * @param input - The input.
   *
   * @returns The draft documentation guide.
   */
  async publishDocumentationPageDraft(
    input: PublishDocumentationPageDraftInput,
  ) {
    const res = await this.makeRequest<{
      documentation: PublishDocumentationPageDraftPayload;
    }>('publishDocumentationPageDraft', PUBLISH_DOCUMENTATION_PAGE_DRAFT, {
      input,
    });
    return res.documentation.page;
  }

  /**
   * Creates a documentation project
   *
   * @param input - The input.
   *
   * @returns The documentation project.
   */
  async createDocumentationProject(input: CreateDocumentationProjectInput) {
    const res = await this.makeRequest<{
      documentation: CreateDocumentationProjectPayload;
    }>('createDocumentationProject', CREATE_DOCUMENTATION_PROJECT, {
      input,
    });
    return res.documentation.project;
  }

  /**
   * Updates a documentation general settings
   *
   * @param input - The input.
   *
   * @returns The documentation project.
   */
  async updateDocumentationGeneralSettings(
    input: UpdateDocumentationGeneralSettingsInput,
  ) {
    const res = await this.makeRequest<{
      documentation: UpdateDocumentationGeneralSettingsPayload;
    }>(
      'updateDocumentationGeneralSettings',
      UPDATE_DOCUMENTATION_GENERAL_SETTINGS,
      {
        input,
      },
    );
    return res.documentation.project;
  }

  /**
   * Updates documentation integrations
   *
   * @param input - The input.
   *
   * @returns The documentation project.
   */
  async updateDocumentationIntegrations(
    input: UpdateDocumentationIntegrationsInput,
  ) {
    const res = await this.makeRequest<{
      documentation: UpdateDocumentationIntegrationsPayload;
    }>('updateDocumentationIntegrations', UPDATE_DOCUMENTATION_INTEGRATIONS, {
      input,
    });
    return res.documentation.project;
  }

  /**
   * Updates documentation appearance
   *
   * @param input - The input.
   *
   * @returns The documentation project.
   */
  async updateDocumentationAppearance(
    input: UpdateDocumentationAppearanceInput,
  ) {
    const res = await this.makeRequest<{
      documentation: UpdateDocumentationAppearancePayload;
    }>('updateDocumentationAppearance', UPDATE_DOCUMENTATION_APPEARANCE, {
      input,
    });
    return res.documentation.project;
  }
}
