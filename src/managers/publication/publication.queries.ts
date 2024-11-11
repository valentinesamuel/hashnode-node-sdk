import { gql } from 'graphql-request';

export const GET_PUBLICATION_QUERY = gql`
  query getPublication($id: ObjectId, $host: String) {
    publication(id: $id, host: $host) {
      id
      title
      displayTitle
      descriptionSEO
      about {
        markdown
      }
      url
      canonicalURL
      author {
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
      favicon
      headerColor
      metaTags
      integrations {
        fbPixelID
        fathomSiteID
        fathomCustomDomainEnabled
        fathomCustomDomain
        hotjarSiteID
        matomoSiteID
        matomoURL
        gaTrackingID
        plausibleAnalyticsEnabled
        wmPaymentPointer
        umamiWebsiteUUID
        umamiShareId
        gTagManagerID
      }
      preferences {
        logo
        darkMode {
          enabled
          logo
        }
        enabledPages {
          badges
          newsletter
          members
        }
        navbarItems {
          id
          label
          url
          type
          series {
            id
            name
            description {
              markdown
            }
            coverImage
            author {
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
            }
          }
          page {
            id
            title
            slug
          }
        }
        layout
        disableFooterBranding
        isSubscriptionModalDisabled
      }
      followersCount
      imprintV2 {
        markdown
      }
      isTeam
      links {
        website
        github
        twitter
        instagram
        facebook
        linkedin
        youtube
      }
      domainInfo {
        hashnodeSubdomain
        domain {
          host
          ready
          status
          verifiedAt
        }
        wwwPrefixedDomain {
          host
          ready
          status
          verifiedAt
        }
      }
      isHeadless
      pinnedPost {
        id
        slug
        title
        subtitle
        author {
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
      ogMetaData {
        image
      }
      features {
        newsletter {
          isEnabled
          frequency
        }
        viewCount {
          isEnabled
        }
        readTime {
          isEnabled
        }
        textSelectionSharer {
          isEnabled
        }
        customCSS {
          isEnabled
          published {
            home
            post
            static
            homeMinified
            postMinified
            staticMinified
          }
          draft {
            home
          }
        }
        headlessCMS {
          isEnabled
        }
        proTeam {
          isEnabled
        }
        gptBotCrawling {
          isEnabled
        }
      }
      isGitHubBackupEnabled
      isGithubAsSourceConnected
      urlPattern
      emailImport {
        currentImport {
          status
          importStartedAt
          successfullyImported
          attemptedToImport
          filename
        }
      }
      redirectionRules {
        id
        type
        source
        destination
      }
      hasBadges
      sponsorship {
        content {
          markdown
        }
        stripe {
          connected
          accountId
          country
        }
      }
      recommendedPublications {
        node {
          id
          title
          displayTitle
          about {
            markdown
          }
          url
          canonicalURL
          author {
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
      totalRecommendedPublications
      allowContributorEdits
    }
  }
`;

export const SEARCH_POSTS_OF_PUBLICATION = gql`
query SearchPostOfPublication($first: Int!, $after: String, $filter: SearchPostsOfPublicationFilter!) {
  searchPostsOfPublication(first: $first, after: $after, filter: $filter) {
    edges {
      node {
        id
        slug
        content {
          markdown
        }
        previousSlugs
        title
        subtitle
        author {
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
        coAuthors {
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
        tags {
          id
          name
          slug
          logo
          tagline
        }
        url
        canonicalUrl
        publication {
          id
          title
          displayTitle
          descriptionSEO
          about {
            markdown
          }
          url
          canonicalURL
          author {
            id
          }
          favicon
          headerColor
          metaTags
        }
        coverImage {
          url
          isPortrait
          attribution
          photographer
          isAttributionHidden
        }
        brief
        readTimeInMinutes
        views
        series {
          id
          name
        }
        reactionCount
        responseCount
        replyCount
        featured
        bookmarked
        featuredAt
        preferences {
          pinnedToBlog
          disableComments
          stickCoverToBottom
          isDelisted
        }
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        hasLatexInPost
        isFollowed
        isAutoPublishedFromRSS
        features {
          tableOfContents {
            isEnabled
            items {
              id
              level
              slug
              title
              parentId
            }
          }
          badges {
            isEnabled
            items {
              id
              type
            }
          }
          tableOfContents {
            items {
              id
              level
              slug
              title
              parentId
            }
            isEnabled
          }
          badges {
            isEnabled
            items {
              id
              type
            }
          }
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`

export const GET_PUBLICATION_PENDING_INVITES = gql`
  query getPublicationPendingInvites(
    $id: ObjectId,
    $host: String,
    $pageSize: Int!,
    $page: Int!
  ) {
    publication(id: $id, host: $host) {
      invites {
        pendingInvites(pageSize: $pageSize, page: $page) {
          nodes {
            id
            email
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
            role
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            previousPage
            nextPage
          }
          totalDocuments
        }
        areRoleBasedInviteLinksActive
      }
    }
  }
`;

export const GET_PUBLICATION_ROLE_BASED_INVITE_QUERY = gql`
  query getPublicationPendingInvites(
    $id: ObjectId
    $host: String
    $pageSize: Int!
    $page: Int!
  ) {
    publication(id: $id, host: $host) {
      invites {
        roleBasedInvites(pageSize: $pageSize, page: $page) {
          nodes {
            id
            role
            isUnlimitedCapacity
            usedCapacity
            capacity
            inviteLink
            createdAt
            expiryDate
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            previousPage
            nextPage
          }
          totalDocuments
        }
        areRoleBasedInviteLinksActive
      }
    }
  }
`;

export const GET_PUBLICATION_SERIES_LIST_QUERY = gql`
  query getPublicationSeriesList(
    $id: ObjectId
    $host: String
    $first: Int!
    $after: String!
  ) {
    publication(id: $id, host: $host) {
      seriesList(first: $first, after: $after) {
        edges {
          node {
            id
            name
            createdAt
            description {
              markdown
            }
            coverImage
            author {
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
            slug
            sortOrder
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalDocuments
      }
    }
  }
`;

export const GET_PUBLICATION_SERIES_QUERY = gql`
  query getPublicationSeries($id: ObjectId, $host: String, $slug: String!) {
    publication(id: $id, host: $host) {
      series(slug: $slug) {
        id
        name
        createdAt
        description {
          markdown
        }
        coverImage
        author {
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
        slug
        sortOrder
      }
    }
  }
`;

export const GET_PUBLICATION_DRAFT_QUERY = gql`
  query getPublicationDrafts(
    $id: ObjectId
    $host: String
    $first: Int!
    $after: String!
    $filter: PublicationDraftConnectionFilter
  ) {
    publication(id: $id, host: $host) {
      drafts(first: $first, after: $after, filter: $filter) {
        edges {
          node {
            id
            slug
            title
            subtitle
            author {
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
            coAuthors {
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
            publishAs {
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
            tagsV2 {
              __typename
            }
            canonicalUrl
            publication {
              id
              title
              displayTitle
              descriptionSEO
              about {
                markdown
              }
              url
              canonicalURL
              author {
                id
              }
              favicon
              headerColor
              metaTags
            }
            coverImage {
              url
              attribution
              photographer
              isAttributionHidden
            }
            readTimeInMinutes
            series {
              id
              name
              slug
            }
            content {
              markdown
            }
            updatedAt
            settings {
              disableComments
              stickCoverToBottom
              isDelisted
            }
            seo {
              title
              description
            }
            ogMetaData {
              image
            }
            features {
              tableOfContents {
                isEnabled
                items {
                  id
                  level
                  slug
                  title
                }
              }
            }
            lastBackup {
              status
              at
            }
            lastSuccessfulBackupAt
            lastFailedBackupAt
            scheduledDate
            isSubmittedForReview
            publishedPost {
              id
              slug
              title
              subtitle
              author {
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
              coAuthors {
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
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalDocuments
      }
    }
  }
`;

export const GET_ALL_PUBLICATION_DRAFTS_QUERY = gql`
  query getAllPublicationDrafts(
    $id: ObjectId
    $host: String
    $first: Int!
    $after: String!
    $filter: PublicationSearchableDraftConnectionFilter
  ) {
    publication(id: $id, host: $host) {
      allDrafts(first: $first, after: $after, filter: $filter) {
        edges {
          node {
            id
            slug
            title
            subtitle
            author {
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
            coAuthors {
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
            publishAs {
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
            tagsV2 {
              __typename
            }
            canonicalUrl
            publication {
              id
              title
              displayTitle
              descriptionSEO
              about {
                markdown
              }
              url
              canonicalURL
              author {
                id
              }
              favicon
              headerColor
              metaTags
            }
            coverImage {
              url
              attribution
              photographer
              isAttributionHidden
            }
            readTimeInMinutes
            series {
              id
              name
              slug
            }
            content {
              markdown
            }
            updatedAt
            settings {
              disableComments
              stickCoverToBottom
              isDelisted
            }
            seo {
              title
              description
            }
            ogMetaData {
              image
            }
            features {
              tableOfContents {
                isEnabled
                items {
                  id
                  level
                  slug
                  title
                }
              }
            }
            lastBackup {
              status
              at
            }
            lastSuccessfulBackupAt
            lastFailedBackupAt
            scheduledDate
            isSubmittedForReview
            publishedPost {
              id
              slug
              title
              subtitle
              author {
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
              coAuthors {
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
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalDocuments
      }
    }
  }
`;

export const GET_PUBLICATION_SCHEDULED_DRAFT_QUERY = gql`
  query getPublicationScheduledDrafts(
    $id: ObjectId
    $host: String
    $first: Int!
    $after: String!
    $filter: PublicationDraftConnectionFilter
  ) {
    publication(id: $id, host: $host) {
      scheduledDrafts(first: $first, after: $after, filter: $filter) {
        edges {
          node {
            id
            slug
            title
            subtitle
            author {
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
            coAuthors {
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
            publishAs {
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
            tagsV2 {
              __typename
            }
            canonicalUrl
            publication {
              id
              title
              displayTitle
              descriptionSEO
              about {
                markdown
              }
              url
              canonicalURL
              author {
                id
              }
              favicon
              headerColor
              metaTags
            }
            coverImage {
              url
              attribution
              photographer
              isAttributionHidden
            }
            readTimeInMinutes
            series {
              id
              name
              slug
            }
            content {
              markdown
            }
            updatedAt
            settings {
              disableComments
              stickCoverToBottom
              isDelisted
            }
            seo {
              title
              description
            }
            ogMetaData {
              image
            }
            features {
              tableOfContents {
                isEnabled
                items {
                  id
                  level
                  slug
                  title
                }
              }
            }
            lastBackup {
              status
              at
            }
            lastSuccessfulBackupAt
            lastFailedBackupAt
            scheduledDate
            isSubmittedForReview
            publishedPost {
              id
              slug
              title
              subtitle
              author {
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
              coAuthors {
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
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalDocuments
      }
    }
  }
`;

export const GET_ALL_PUBLICATION_SCHEDULED_DRAFTS_QUERY = gql`
  query getAllPublicationScheduledDrafts(
    $id: ObjectId
    $host: String
    $first: Int!
    $after: String!
    $filter: PublicationSearchableDraftConnectionFilter
  ) {
    publication(id: $id, host: $host) {
      allScheduledDrafts(first: $first, after: $after, filter: $filter) {
        edges {
          node {
            id
            slug
            title
            subtitle
            author {
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
            coAuthors {
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
            publishAs {
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
            tagsV2 {
              __typename
            }
            canonicalUrl
            publication {
              id
              title
              displayTitle
              descriptionSEO
              about {
                markdown
              }
              url
              canonicalURL
              author {
                id
              }
              favicon
              headerColor
              metaTags
            }
            coverImage {
              url
              attribution
              photographer
              isAttributionHidden
            }
            readTimeInMinutes
            series {
              id
              name
              slug
            }
            content {
              markdown
            }
            updatedAt
            settings {
              disableComments
              stickCoverToBottom
              isDelisted
            }
            seo {
              title
              description
            }
            ogMetaData {
              image
            }
            features {
              tableOfContents {
                isEnabled
                items {
                  id
                  level
                  slug
                  title
                }
              }
            }
            lastBackup {
              status
              at
            }
            lastSuccessfulBackupAt
            lastFailedBackupAt
            scheduledDate
            isSubmittedForReview
            publishedPost {
              id
              slug
              title
              subtitle
              author {
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
              coAuthors {
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
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalDocuments
      }
    }
  }
`;

export const GET_PUBLICATION_STATIC_PAGE_QUERY = gql`
  query getPublicationStaticOage($id: ObjectId, $host: String, $slug: String!) {
    publication(id: $id, host: $host) {
      staticPage(slug: $slug) {
        id
        title
        slug
        content {
          markdown
        }
        hidden
        ogMetaData {
          image
        }
        seo {
          title
          description
        }
      }
    }
  }
`;

export const GET_PUBLICATION_STATIC_PAGES_QUERY = gql`
  query getPublicationStaticPages(
    $id: ObjectId!
    $host: String
    $first: Int!
    $after: String!
  ) {
    publication(id: $id, host: $host) {
      staticPages(first: $first, after: $after) {
        edges {
          node {
            id
            title
            slug
            content {
              markdown
            }
            hidden
            ogMetaData {
              image
            }
            seo {
              title
              description
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalDocuments
      }
    }
  }
`;

export const GET_PUBLICATION_SUBMITTED_DRAFTS_QUERY = gql`
  query getPublicationSubmittedDrafts(
    $id: ObjectId
    $host: String
    $first: Int!
    $after: String!
    $filter: PublicationDraftConnectionFilter
  ) {
    publication(id: $id, host: $host) {
      submittedDrafts(first: $first, after: $after, filter: $filter) {
        edges {
          node {
            id
            slug
            title
            subtitle
            author {
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
            coAuthors {
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
            publishAs {
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
            tagsV2 {
              __typename
            }
            canonicalUrl
            publication {
              id
              title
              displayTitle
              descriptionSEO
              about {
                markdown
              }
              url
              canonicalURL
              author {
                id
              }
              favicon
              headerColor
              metaTags
            }
            coverImage {
              url
              attribution
              photographer
              isAttributionHidden
            }
            readTimeInMinutes
            series {
              id
              name
              slug
            }
            content {
              markdown
            }
            updatedAt
            settings {
              disableComments
              stickCoverToBottom
              isDelisted
            }
            seo {
              title
              description
            }
            ogMetaData {
              image
            }
            features {
              tableOfContents {
                isEnabled
                items {
                  id
                  level
                  slug
                  title
                }
              }
            }
            lastBackup {
              status
              at
            }
            lastSuccessfulBackupAt
            lastFailedBackupAt
            scheduledDate
            isSubmittedForReview
            publishedPost {
              id
              slug
              title
              subtitle
              author {
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
              coAuthors {
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
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalDocuments
      }
    }
  }
`;

export const GET_PUBLICATION_RECOMMENDING_PUBLICATION_QUERY = gql`
  query getPublicationRecommendingPublication(
    $id: ObjectId
    $host: String
    $page: Int!
    $pageSize: Int!
  ) {
    publication(id: $id, host: $host) {
      recommendingPublications(page: $page, pageSize: $pageSize) {
        edges {
          node {
            id
            title
            displayTitle
            descriptionSEO
            about {
              markdown
            }
            url
            canonicalURL
            author {
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
            favicon
            headerColor
            metaTags
            integrations {
              fbPixelID
              fathomSiteID
              fathomCustomDomainEnabled
              fathomCustomDomain
              hotjarSiteID
              matomoSiteID
              matomoURL
              gaTrackingID
              plausibleAnalyticsEnabled
              wmPaymentPointer
              umamiWebsiteUUID
              umamiShareId
              gTagManagerID
            }
            preferences {
              logo
              darkMode {
                enabled
                logo
              }
              enabledPages {
                badges
                newsletter
                members
              }
              navbarItems {
                id
                label
                url
                type
                series {
                  id
                  name
                  description {
                    markdown
                  }
                  coverImage
                  author {
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
                  }
                }
                page {
                  id
                  title
                  slug
                }
              }
              layout
              disableFooterBranding
              isSubscriptionModalDisabled
            }
            followersCount
            imprintV2 {
              markdown
            }
            isTeam
            links {
              website
              github
              twitter
              instagram
              facebook
              linkedin
              youtube
            }
            domainInfo {
              hashnodeSubdomain
              domain {
                host
                ready
                status
                verifiedAt
              }
              wwwPrefixedDomain {
                host
                ready
                status
                verifiedAt
              }
            }
            isHeadless
            pinnedPost {
              id
              slug
              title
              subtitle
              author {
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
            ogMetaData {
              image
            }
            features {
              newsletter {
                isEnabled
                frequency
              }
              viewCount {
                isEnabled
              }
              readTime {
                isEnabled
              }
              textSelectionSharer {
                isEnabled
              }
              customCSS {
                isEnabled
                published {
                  home
                  post
                  static
                  homeMinified
                  postMinified
                  staticMinified
                }
                draft {
                  home
                }
              }
              headlessCMS {
                isEnabled
              }
              proTeam {
                isEnabled
              }
              gptBotCrawling {
                isEnabled
              }
            }
            isGitHubBackupEnabled
            isGithubAsSourceConnected
            urlPattern
            emailImport {
              currentImport {
                status
                importStartedAt
                successfullyImported
                attemptedToImport
                filename
              }
            }
            redirectionRules {
              id
              type
              source
              destination
            }
            hasBadges
            sponsorship {
              content {
                markdown
              }
              stripe {
                connected
                accountId
                country
              }
            }
            recommendedPublications {
              node {
                id
                title
                displayTitle
                about {
                  markdown
                }
                url
                canonicalURL
                author {
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
            totalRecommendedPublications
            allowContributorEdits
          }
          totalFollowersGained
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          previousPage
          nextPage
        }
        totalDocuments
      }
    }
  }
`;

export const GET_PUBLICATION_RECOMMENDED_PUBLICATION_QUERY = gql`
  query getPublicationRecommendedPublication($id: ObjectId, $host: String) {
    publication(id: $id, host: $host) {
      recommendedPublications {
        node {
          id
          title
          displayTitle
          descriptionSEO
          about {
            markdown
          }
          url
          canonicalURL
          author {
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
          favicon
          headerColor
          metaTags
          integrations {
            fbPixelID
            fathomSiteID
            fathomCustomDomainEnabled
            fathomCustomDomain
            hotjarSiteID
            matomoSiteID
            matomoURL
            gaTrackingID
            plausibleAnalyticsEnabled
            wmPaymentPointer
            umamiWebsiteUUID
            umamiShareId
            gTagManagerID
          }
          preferences {
            logo
            darkMode {
              enabled
              logo
            }
            enabledPages {
              badges
              newsletter
              members
            }
            navbarItems {
              id
              label
              url
              type
              series {
                id
                name
                description {
                  markdown
                }
                coverImage
                author {
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
                }
              }
              page {
                id
                title
                slug
              }
            }
            layout
            disableFooterBranding
            isSubscriptionModalDisabled
          }
          followersCount
          imprintV2 {
            markdown
          }
          isTeam
          links {
            website
            github
            twitter
            instagram
            facebook
            linkedin
            youtube
          }
          domainInfo {
            hashnodeSubdomain
            domain {
              host
              ready
              status
              verifiedAt
            }
            wwwPrefixedDomain {
              host
              ready
              status
              verifiedAt
            }
          }
          isHeadless
          pinnedPost {
            id
            slug
            title
            subtitle
            author {
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
          ogMetaData {
            image
          }
          features {
            newsletter {
              isEnabled
              frequency
            }
            viewCount {
              isEnabled
            }
            readTime {
              isEnabled
            }
            textSelectionSharer {
              isEnabled
            }
            customCSS {
              isEnabled
              published {
                home
                post
                static
                homeMinified
                postMinified
                staticMinified
              }
              draft {
                home
              }
            }
            headlessCMS {
              isEnabled
            }
            proTeam {
              isEnabled
            }
            gptBotCrawling {
              isEnabled
            }
          }
          isGitHubBackupEnabled
          isGithubAsSourceConnected
          urlPattern
          emailImport {
            currentImport {
              status
              importStartedAt
              successfullyImported
              attemptedToImport
              filename
            }
          }
          redirectionRules {
            id
            type
            source
            destination
          }
          hasBadges
          sponsorship {
            content {
              markdown
            }
            stripe {
              connected
              accountId
              country
            }
          }
          recommendedPublications {
            node {
              id
              title
              displayTitle
              about {
                markdown
              }
              url
              canonicalURL
              author {
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
          totalRecommendedPublications
          allowContributorEdits
        }
        totalFollowersGained
      }
    }
  }
`;

export const GET_PUBLICATION_REDIRECTED_POST_QUERY = gql`
  query getPublicationRedirectedPost(
    $id: ObjectId
    $host: String
    $slug: String!
  ) {
    publication(id: $id, host: $host) {
      redirectedPost(slug: $slug) {
        id
        slug
        title
        subtitle
        author {
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
        coAuthors {
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

export const GET_PUBLICATION_POST = gql`
  query getPublicationPost($id: ObjectId, $host: String, $slug: String!) {
    publication(id: $id, host: $host) {
      post(slug: $slug) {
        id
        slug
        title
        subtitle
        author {
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
        coAuthors {
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

export const GET_PUBLICATION_POSTS_VIA_PAGE = gql`
  query getPublicationPostsViaPage(
    $id: ObjectId
    $host: String
    $pageSize: Int!
    $page: Int!
    $filter: PublicationPostsViaPageFilter!
  ) {
    publication(id: $id, host: $host) {
      postsViaPage(pageSize: $pageSize, page: $page, filter: $filter) {
        nodes {
          id
          slug
          title
          subtitle
          author {
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
          coAuthors {
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
        pageInfo {
          hasNextPage
          hasPreviousPage
          previousPage
          nextPage
        }
        totalDocuments
      }
    }
  }
`;

export const GET_PUBLICATION_PINNED_POST = gql`
  query getPublicationPinnedPost($id: ObjectId, $host: String) {
    publication(id: $id, host: $host) {
      pinnedPost {
        id
        slug
        title
        subtitle
        author {
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
        coAuthors {
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
