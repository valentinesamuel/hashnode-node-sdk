import { BaseManager } from '../base.manager';
import type { HashnodeSDKClient } from '../../client';
import {
  GET_DOCUMENTATION_PROJECT_CUSTOM_PAGE_QUERY,
  GET_DOCUMENTATION_PROJECT_CUSTOM_PAGES,
  GET_DOCUMENTATION_PROJECT_DEFAULT_GUIDE_QUERY,
  GET_DOCUMENTATION_PROJECT_GUIDES_QUERY,
  GET_DOCUMENTATION_PROJECT_NAVIGATION_QUERY,
  GET_DOCUMENTATION_PROJECT_PENDING_INVITES,
  GET_DOCUMENTATION_PROJECT_PUBLISHED_GUIDE_QUERY, GET_DOCUMENTATION_PROJECT_PUBLISHED_GUIDES_QUERY,
  GET_DOCUMENTATION_PROJECT_QUERY,
  GET_DOCUMENTATION_PROJECT_V2_MEMBER_QUERY, GET_DOCUMENTATION_PROJECT_VIEWS_QUERY,
  SEARCH_DOCUMENTATION_PROJECT_USERS_QUERY,
} from './documenationProkect.queries';
import type {
  DocumentationProject,
  DocumentationProjectMemberConnectionFilter,
  DocumentationProjectSearchUsersInput,
  ProjectViewsFilter,
  ProjectViewsGroupBy,
  ProjectViewsOptions,
  ProjectViewsSortBy,
  ProjectVisitorsFilter,
  ProjectVisitorsGroupBy,
  ProjectVisitorsOptions,
} from '../../generated/gqlQueryTypes';

export class DocumentationProjectManager extends BaseManager {
  constructor(client: HashnodeSDKClient) {
    super(client, 'DocumentationProjectManager');
  }

  async getDocumentationProject(documentationProjectId: string, host: string) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>('getDocumentationProject', GET_DOCUMENTATION_PROJECT_QUERY, {
      id: documentationProjectId,
      host,
    });
    return res.documentationProject;
  }

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

  async getDocumentationProjectCustomPage(slug: string) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>('getDocumentationProjectCustomPage', GET_DOCUMENTATION_PROJECT_CUSTOM_PAGE_QUERY, {
      slug,
    });
    return res.documentationProject.customPage;
  }

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

  async getDocumentationProjectGuide(
    documentationProjectId: string,
    slug: string,
  ) {
    const res = await this.makeRequest<{
      documentationProject: DocumentationProject;
    }>('getDocumentationProjectGuide', GET_DOCUMENTATION_PROJECT_QUERY, {
      id: documentationProjectId,
      slug,
    });
    return res.documentationProject.guide;
  }

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

  async getDocumentationProjectPublishedGuide(documentationProjectId: string, slug: string,) {
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

  async getDocumentationProjectViews(documentationProjectId: string,
    first: number, after: string, filter: ProjectViewsFilter, groupBy: ProjectViewsGroupBy, sortBy: ProjectViewsSortBy, options: ProjectViewsOptions) {
    const res = await this.makeRequest<{ documentationProject: DocumentationProject }>(
      'getDocumentationProjectViews',
      GET_DOCUMENTATION_PROJECT_VIEWS_QUERY,
      { id: documentationProjectId, first, after, filter, groupBy, sortBy, options })
    return res.documentationProject.analytics.views
  }

  async getDocumentationProjectVisitors(documentationProjectId: string,
    first: number, after: string, filter: ProjectVisitorsFilter, groupBy: ProjectVisitorsGroupBy, options: ProjectVisitorsOptions) {
    const res = await this.makeRequest<{ documentationProject: DocumentationProject }>(
      'getDocumentationProjectViews',
      GET_DOCUMENTATION_PROJECT_VIEWS_QUERY,
      { id: documentationProjectId, first, after, filter, groupBy, options })
    return res.documentationProject.analytics.visitors
  }

  async getDocumentationProjectNavigation() {
    const res = await this.makeRequest<{ documentationProject: DocumentationProject }>(
      'getDocumentationProjectNavigation',
      GET_DOCUMENTATION_PROJECT_NAVIGATION_QUERY,
      {})
    return res.documentationProject.navigation
  }

  async searchDocumentationProjectUsers(input: DocumentationProjectSearchUsersInput) {
    const res = await this.makeRequest<{ documentationProject: DocumentationProject }>(
      'searchDocumentationProjectUsers',
      SEARCH_DOCUMENTATION_PROJECT_USERS_QUERY,
      { input })
    return res.documentationProject.searchUsers
  }
}
