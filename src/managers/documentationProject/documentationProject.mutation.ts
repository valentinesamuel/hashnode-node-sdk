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

export const UPDATE_DOCUMENTATION_PROJECT_SUBDOMAIN_MUTATION = gql`
  mutation updateDocumentationProjectSubdomainMutation(
    $input: UpdateDocumentationProjectSubdomainInput!
  ) {
    updateDocumentationProjectSubdomain(input: $input) {
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

export const REMOVE_DOCUMENTATION_PROJECT_MUTATION = gql`
  mutation removeDocumentatationProjectMutation(
    $input: RemoveDocumentationProjectInput!
  ) {
    removeDocumentationProject(input: $input) {
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

export const ADD_DOCUMENTATION_PROJECT_CUSTOM_DOMAIN_MUTATION = gql`
    mutation addDocumentationProjectCustomDomainMutation($input: AddDocumentationProjectCustomDomainInput!) {
        addDocumentationProjectCustomDomain(input: $input) {
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
            dnsVerificationEntries {
                type
                name
                value
            }
            wwwRedirectDnsVerificationEntries {
                name
                type
                value
            }
        }
    }
`;

export const MAP_DOCUMENTATION_PROJECT_CUSTOM_DOMAIN_WWW_REDIRECT_MUTATION = gql`
  mutation mapDocumentationProjectCustomDomainWwwRedirectMutation(
    $input: MapDocumentationProjectCustomDomainWwwRedirectInput!
  ) {
    mapDocumentationProjectCustomDomainWwwRedirect(input: $input) {
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

export const VERIFY_DOCUMENTATION_PROJECT_CUSTOM_DOMAIN_MUTATION = gql`
  mutation verifyDocumentationProjectCustomDomainMutation(
    $input: VerifyDocumentationProjectCustomDomainInput!
  ) {
    verifyDocumentationProjectCustomDomain(input: $input) {
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

export const RETRY_DOCUMENTATION_PROJECT_CUSTOM_DOMAIN_VERIFICATION_MUTATION = gql`
  mutation retryDocumentationProjectCustomDomainVerificationMutation(
    $input: RetryDocumentationProjectCustomDomainVerificationInput!
  ) {
    retryDocumentationProjectCustomDomainVerification(input: $input) {
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

export const REMOVE_DOCUMENTATION_PROJECT_CUSTOM_DOMAIN_MUTATION = gql`
  mutation removeDocumentationProjectCustomDomainMutation(
    $input: RemoveDocumentationProjectCustomDomainInput!
  ) {
    removeDocumentationProjectCustomDomain(input: $input) {
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

export const ENABLE_DOCUMENTATION_PROJECT_HEADLESS_CMS_MUTATION = gql`
  mutation enableDocumentationProjectHeadlessCmsMutation(
    $input: EnableDocumentationProjectHeadlessCmsInput!
  ) {
    enableDocumentationProjectHeadlessCms(input: $input) {
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

export const DISABLE_DOCUMENTATION_PROJECT_HEADLESS_CMS_MUTATION = gql`
  mutation disableDocumentationProjectHeadlessCmsMutation(
    $input: DisableDocumentationProjectHeadlessCmsInput!
  ) {
    disableDocumentationProjectHeadlessCms(input: $input) {
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

export const GENERATE_DOCUMENTATION_PROJECT_PREVIEW_TOKEN_MUTATION = gql`
  mutation generateDocumentationProjectPreviewTokenMutation(
    $input: GenerateDocumentationProjectPreviewTokenInput!
  ) {
    generateDocumentationProjectPreviewToken(input: $input) {
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
      token
    }
  }
`;

export const INVITE_DOCUMENTATION_PROJECT_ADMIN_MUTATION = gql`
  mutation inviteDocumentationProjectAdminMutation(
    $input: InviteDocumentationProjectAdminInput!
  ) {
    inviteDocumentationProjectAdmin(input: $input) {
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

export const ACCEPT_INVITE_TO_DOCUMENTATION_PROJECT_MUTATION = gql`
  mutation acceptInviteToDocumentationProjectMutation(
    $input: AcceptInviteToDocumentationProjectInput!
  ) {
    acceptInviteToDocumentationProject(input: $input) {
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
      success
    }
  }
`;

export const REVOKE_INVITE_TO_DOCUMENTATION_PROJECT_MUTATION = gql`
  mutation revokeInviteToDocumentationProjectMutation(
    $input: RevokeInviteToDocumentationProjectInput!
  ) {
    revokeInviteToDocumentationProject(input: $input) {
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
      success
    }
  }
`;

export const REMOVE_DOCUMENTATION_PROJECT_MEMBER_MUTATION = gql`
  mutation removeDocumentationProjectMemberMutation(
    $input: RemoveDocumentationProjectMemberInput!
  ) {
    removeDocumentationProjectMember(input: $input) {
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
      removedMember {
        role
        user {
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
      }
    }
  }
`;

export const ENABLE_DOCUMENTATION_PROJECT_AI_SEARCH_MUTATION = gql`
  mutation enableDocumentationProjectAISearchMutation(
    $input: EnableDocumentationProjectAISearchInput!
  ) {
    enableDocumentationProjectAISearch(input: $input) {
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

export const DISABLE_DOCUMENTATION_PROJECT_AI_SEARCH_MUTATION = gql`
  mutation disableDocumentationProjectAISearchMutation(
    $input: DisableDocumentationProjectAISearchInput!
  ) {
    disableDocumentationProjectAISearch(input: $input) {
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

export const UPDATE_DOCUMENTATION_PROJECT_AI_PROMPT_MUTATION = gql`
  mutation updateDocumentationProjectAIPromptMutation(
    $input: UpdateDocumentationProjectAIPromptInput!
  ) {
    updateDocumentationProjectAIPrompt(input: $input) {
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

export const REMOVE_DOCUMENTATION_PROJECT_AI_PROMPT_MUTATION = gql`
  mutation removeDocumentationProjectAIPromptMutation(
    $input: RemoveDocumentationProjectAIPromptInput!
  ) {
    removeDocumentationProjectAIPrompt(input: $input) {
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

export const REMOVE_DOCUMENTATION_GUIDE_MUTATION = gql`
  mutation removeDocumentationGuideMutation(
    $input: RemoveDocumentationGuideInput!
  ) {
    removeDocumentationGuide(input: $input) {
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

export const CREATE_DOCUMENTATION_GUIDE_MUTATION = gql`
  mutation createDocumentationGuideMutation(
    $input: CreateDocumentationGuideInput!
  ) {
    createDocumentationGuide(input: $input) {
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

export const UPDATE_DOCUMENTATION_GUIDE_MUTATION = gql`
  mutation updateDocumentationGuideMutation(
    $input: UpdateDocumentationGuideInput!
  ) {
    updateDocumentationGuide(input: $input) {
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

export const RENAME_DOCUMENTATION_GUIDE_MUTATION = gql`
  mutation renameDocumentationGuideMutation(
    $input: RenameDocumentationGuideItemInput!
  ) {
    renameDocumentationGuide(input: $input) {
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

export const CREATE_DOCUMENTATION_API_REFERENCE_MUTATION = gql`
  mutation createDocumentationApiReferenceMutation(
    $input: CreateDocumentationApiReferenceInput!
  ) {
    createDocumentationApiReference(input: $input) {
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

export const PUBLISH_DOCUMENTATION_API_REFERENCE_MUTATION = gql`
  mutation publishDocumentationApiReferenceMutation(
    $input: PublishDocumentationApiReferenceInput!
  ) {
    publishDocumentationApiReference(input: $input) {
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

export const SYNC_DOCUMENTATION_API_DEFINITION_MUTATION = gql`
  mutation syncDocumentationProjectApiDefinitionMutation(
    $input: SyncDocumentationProjectApiDefinitionInput!
  ) {
    syncDocumentationProjectApiDefinition(input: $input) {
      success
    }
  }
`;

export const CREATE_REDIRECTION_RULE_MUTATION = gql`
    mutation createRedirectionRuleMutation($input: CreateRedirectionRuleInput!) {
        createRedirectionRule(input: $input) {
            redirectionRule {
                id
                type
                source
                destination
            }
        }
    }
`

export const UPDATE_REDIRECTION_RULE_MUTATION = gql`
  mutation updateRedirectionRuleMutation($input: UpdateRedirectionRuleInput!) {
  updateRedirectionRule(input: $input) {
    redirectionRule {
      id
      type
      source
      destination
    }
  }
}
`

export const REMOVE_REDIRECTION_RULE_MUTATION = gql`
    mutation removeRedirectionRuleMutation($input: RemoveRedirectionRuleInput!) {
        removeRedirectionRule(input: $input) {
            redirectionRule {
                id
                type
                source
                destination
            }
        }
    }
`
