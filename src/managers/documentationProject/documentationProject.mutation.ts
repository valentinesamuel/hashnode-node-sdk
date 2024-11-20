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

export const CREATE_DOCUMENTATION_PROJECT = gql`
  mutation createDocumentationProjectMutation(
    $input: CreateDocumentationProjectInput!
  ) {
    createDocumentationProject(input: $input) {
      project {
        id
        name
        description
        settings {
          isRobotsAllowed
          isHashnodeLoginAllowed
          isHeadless
        }
        links {
          twitter
          instagram
          github
          website
          hashnode
          youtube
          dailydev
          linkedin
          mastodon
          githubRepository
        }
        createdAt
        updatedAt
        appearance {
          logoUrl
          logoDarkThemeUrl
          favIconUrl
          primaryColor
          defaultDocsTheme
          getStarted {
            label
            url
          }
          customScript
        }
        integrations {
          fbPixelID
          hotjarSiteID
          gaTrackingID
          gTagManagerID
          intercomID
          metaTags
        }
        features {
          collaboration {
            isEnabled
          }
          ghSync {
            isEnabled
          }
          versioning {
            isEnabled
          }
        }
        url
        owner {
          id
          username
          name
          bio {
            markdown
          }
          profilePicture
          socialMediaLinks {
            website
            github
            twitter
            instagram
            facebook
            stackoverflow
            linkedin
            youtube
          }
          followersCount
          followingsCount
          tagline
          following
          followsBack
        }
        subscription {
          status
          productName
          nextBillingCycle
          maxSeats
        }
        ai {
          prompts {
            id
            prompt
            createdAt
          }
          settings {
            isSearchEnabled
          }
        }
      }
    }
  }
`;

export const UPDATE_DOCUMENTATION_GENERAL_SETTINGS = gql`
  mutation updateDocumentationGeneralSettingsMutation(
    $input: UpdateDocumentationGeneralSettingsInput!
  ) {
    updateDocumentationGeneralSettings(input: $input) {
      project {
        id
        name
        description
        settings {
          isRobotsAllowed
          isHashnodeLoginAllowed
          isHeadless
        }
        links {
          twitter
          instagram
          github
          website
          hashnode
          youtube
          dailydev
          linkedin
          mastodon
          githubRepository
        }
        createdAt
        updatedAt
        appearance {
          logoUrl
          logoDarkThemeUrl
          favIconUrl
          primaryColor
          defaultDocsTheme
          getStarted {
            label
            url
          }
          customScript
        }
        integrations {
          fbPixelID
          hotjarSiteID
          gaTrackingID
          gTagManagerID
          intercomID
          metaTags
        }
        features {
          collaboration {
            isEnabled
          }
          ghSync {
            isEnabled
          }
          versioning {
            isEnabled
          }
        }
        url
        owner {
          id
          username
          name
          bio {
            markdown
          }
          profilePicture
          socialMediaLinks {
            website
            github
            twitter
            instagram
            facebook
            stackoverflow
            linkedin
            youtube
          }
          followersCount
          followingsCount
          tagline
          following
          followsBack
        }
        subscription {
          status
          productName
          nextBillingCycle
          maxSeats
        }
        ai {
          prompts {
            id
            prompt
            createdAt
          }
          settings {
            isSearchEnabled
          }
        }
      }
    }
  }
`;

export const UPDATE_DOCUMENTATION_INTEGRATIONS = gql`
  mutation updateDocumentationIntegrationsMutation(
    $input: UpdateDocumentationIntegrationsInput!
  ) {
    updateDocumentationIntegrations(input: $input) {
      project {
        id
        name
        description
        settings {
          isRobotsAllowed
          isHashnodeLoginAllowed
          isHeadless
        }
        links {
          twitter
          instagram
          github
          website
          hashnode
          youtube
          dailydev
          linkedin
          mastodon
          githubRepository
        }
        createdAt
        updatedAt
        appearance {
          logoUrl
          logoDarkThemeUrl
          favIconUrl
          primaryColor
          defaultDocsTheme
          getStarted {
            label
            url
          }
          customScript
        }
        integrations {
          fbPixelID
          hotjarSiteID
          gaTrackingID
          gTagManagerID
          intercomID
          metaTags
        }
        features {
          collaboration {
            isEnabled
          }
          ghSync {
            isEnabled
          }
          versioning {
            isEnabled
          }
        }
        url
        owner {
          id
          username
          name
          bio {
            markdown
          }
          profilePicture
          socialMediaLinks {
            website
            github
            twitter
            instagram
            facebook
            stackoverflow
            linkedin
            youtube
          }
          followersCount
          followingsCount
          tagline
          following
          followsBack
        }
        subscription {
          status
          productName
          nextBillingCycle
          maxSeats
        }
        ai {
          prompts {
            id
            prompt
            createdAt
          }
          settings {
            isSearchEnabled
          }
        }
      }
    }
  }
`;

export const UPDATE_DOCUMENTATION_APPEARANCE = gql`
  mutation updateDocumentationAppearanceMutation(
    $input: UpdateDocumentationAppearanceInput!
  ) {
    updateDocumentationAppearance(input: $input) {
      project {
        id
        name
        description
        settings {
          isRobotsAllowed
          isHashnodeLoginAllowed
          isHeadless
        }
        links {
          twitter
          instagram
          github
          website
          hashnode
          youtube
          dailydev
          linkedin
          mastodon
          githubRepository
        }
        createdAt
        updatedAt
        appearance {
          logoUrl
          logoDarkThemeUrl
          favIconUrl
          primaryColor
          defaultDocsTheme
          getStarted {
            label
            url
          }
          customScript
        }
        integrations {
          fbPixelID
          hotjarSiteID
          gaTrackingID
          gTagManagerID
          intercomID
          metaTags
        }
        features {
          collaboration {
            isEnabled
          }
          ghSync {
            isEnabled
          }
          versioning {
            isEnabled
          }
        }
        url
        owner {
          id
          username
          name
          bio {
            markdown
          }
          profilePicture
          socialMediaLinks {
            website
            github
            twitter
            instagram
            facebook
            stackoverflow
            linkedin
            youtube
          }
          followersCount
          followingsCount
          tagline
          following
          followsBack
        }
        subscription {
          status
          productName
          nextBillingCycle
          maxSeats
        }
        ai {
          prompts {
            id
            prompt
            createdAt
          }
          settings {
            isSearchEnabled
          }
        }
      }
    }
  }
`;
