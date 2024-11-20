import { gql } from 'graphql-request';

export const MOVE_DOCUMENTATION_SIDEBAR_ITEM_MUTATION = gql`
  mutation moveDocumentationSidebarItemMutation(
    $input: MoveDocumentationSidebarItemInput!
  ) {
    moveDocumentationSidebarItem(input: $input) {
      guide {
        id
        slug
        name
        status
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        isLocked
        lastModified
        versionId
        url
        sidebarItems {
          __typename
        }
        publishedSidebarItems {
          __typename
        }
        hasChanges
        provider
      }
    }
  }
`;

export const SET_DOCUMENTATION_SIDEBAR_ITEM_VISIBILITY_MUTATION = gql`
  mutation setDocumentationSidebarItemVisibilityMutation(
    $input: SetDocumentationSidebarItemVisibilityInput!
  ) {
    setDocumentationSidebarItemVisibility(input: $input) {
      guide {
        id
        slug
        name
        status
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        isLocked
        lastModified
        versionId
        url
        sidebarItems {
          __typename
        }
        publishedSidebarItems {
          __typename
        }
        hasChanges
        provider
      }
    }
  }
`;

export const RENAME_DOCUMENTATION_SIDEBAR_ITEM_MUTATION = gql`
  mutation renameDocumentationSidebarItemMutation(
    $input: RenameDocumentationSidebarItemInput!
  ) {
    renameDocumentationSidebarItem(input: $input) {
      guide {
        id
        slug
        name
        status
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        isLocked
        lastModified
        versionId
        url
        sidebarItems {
          __typename
        }
        publishedSidebarItems {
          __typename
        }
        hasChanges
        provider
      }
    }
  }
`;

export const REMOVE_DOCUMENTATION_SIDEBAR_ITEM_MUTATION = gql`
  mutation removeDocumentationSidebarItemMutation(
    $input: RemoveDocumentationSidebarItemInput!
  ) {
    removeDocumentationSidebarItem(input: $input) {
      guide {
        id
        slug
        name
        status
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        isLocked
        lastModified
        versionId
        url
        sidebarItems {
          __typename
        }
        publishedSidebarItems {
          __typename
        }
        hasChanges
        provider
      }
    }
  }
`;

export const CREATE_DOCUMENTATION_SECTION_MUTATION = gql`
  mutation createDocumentationSectionMutation(
    $input: CreateDocumentationSectionInput!
  ) {
    createDocumentationSection(input: $input) {
      guide {
        id
        slug
        name
        status
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        isLocked
        lastModified
        versionId
        url
        sidebarItems {
          __typename
        }
        publishedSidebarItems {
          __typename
        }
        hasChanges
        provider
      }
    }
  }
`;

export const UPDATE_DOCUMENTATION_SECTION_MUTATION = gql`
  mutation updateDocumentationSectionMutation(
    $input: UpdateDocumentationSectionInput!
  ) {
    updateDocumentationSection(input: $input) {
      guide {
        id
        slug
        name
        status
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        isLocked
        lastModified
        versionId
        url
        sidebarItems {
          __typename
        }
        publishedSidebarItems {
          __typename
        }
        hasChanges
        provider
      }
    }
  }
`;

export const CREATE_DOCUMENTATION_PAGE_DRAFT = gql`
  mutation createDocumentationPageDraftMutation(
    $input: CreateDocumentationPageDraftInput!
  ) {
    createDocumentationPageDraft(input: $input) {
      guide {
        id
        slug
        name
        status
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        isLocked
        lastModified
        versionId
        url
        sidebarItems {
          __typename
        }
        publishedSidebarItems {
          __typename
        }
        hasChanges
        provider
      }
    }
  }
`;

export const UPDATE_DOCUMENTATION_PAGE_SETTINGS = gql`
  mutation updateDocumentationPageSettingsMutation(
    $input: UpdateDocumentationPageSettingsInput!
  ) {
    updateDocumentationPageSettings(input: $input) {
      guide {
        id
        slug
        name
        status
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        isLocked
        lastModified
        versionId
        url
        sidebarItems {
          __typename
        }
        publishedSidebarItems {
          __typename
        }
        hasChanges
        provider
      }
    }
  }
`;

export const SAVE_DOCUMENTATION_PAGE_DRAFT_CONTENT = gql`
  mutation saveDocumentationPageDraftContentMutation(
    $input: SaveDocumentationPageDraftContentInput!
  ) {
    saveDocumentationPageDraftContent(input: $input) {
      page {
        id
        path
        title
        description
        createdAt
        updatedAt
        format
        content {
          md
          mdx
        }
        status
        visibility
        guideSlug
        draft {
          title
          description
          content {
            mdx
            md
          }
        }
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        url
      }
    }
  }
`;

export const PUBLISH_DOCUMENTATION_PAGE_DRAFT = gql`
  mutation publishDocumentationPageDraftMutation(
    $input: PublishDocumentationPageDraftInput!
  ) {
    publishDocumentationPageDraft(input: $input) {
      page {
        id
        path
        title
        description
        createdAt
        updatedAt
        format
        content {
          md
          mdx
        }
        status
        visibility
        guideSlug
        draft {
          title
          description
          content {
            mdx
            md
          }
        }
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        url
      }
    }
  }
`;

export const CREATE_DOCUMENTATION_LINK_MUTATION = gql`
  mutation createDocumentationLinkMutation(
    $input: CreateDocumentationLinkInput!
  ) {
    createDocumentationLink(input: $input) {
      guide {
        id
        slug
        name
        status
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        isLocked
        lastModified
        versionId
        url
        sidebarItems {
          __typename
        }
        publishedSidebarItems {
          __typename
        }
        hasChanges
        provider
      }
      link {
        id
        label
        url
        createdAt
        updatedAt
        status
        visibility
      }
    }
  }
`;

export const UPDATE_DOCUMENTATION_LINK_MUTATION = gql`
  mutation updateDocumentationLinkMutation(
    $input: UpdateDocumentationLinkInput!
  ) {
    updateDocumentationLink(input: $input) {
      guide {
        id
        slug
        name
        status
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        isLocked
        lastModified
        versionId
        url
        sidebarItems {
          __typename
        }
        publishedSidebarItems {
          __typename
        }
        hasChanges
        provider
      }
      link {
        id
        label
        url
        createdAt
        updatedAt
        status
        visibility
      }
    }
  }
`;
