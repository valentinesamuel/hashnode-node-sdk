import { gql } from 'graphql-request';

export const GET_ME_QUERY = gql`
  query {
    me {
      id
      name
      username
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
      dateJoined
      location
      availableFor
      provider
      deactivated
      email
      role
      unverifiedEmail
    }
  }
`;

export const GET_MY_EMAIL_PREFENCES_QUERY = gql`
  query {
    me {
      emailNotificationPreferences {
        weeklyNewsletterEmails
        activityNotifications
        generalAnnouncements
        monthlyBlogStats
        newFollowersWeekly
      }
    }
  }
`;

export const GET_MY_PUBLICATIONS_QUERY = gql`
  query (
    $first: Int!
    $after: String
    $sortBy: UserPublicationsSort
    $filter: UserPublicationsConnectionFilter
  ) {
    me {
      publications(
        first: $first
        after: $after
        sortBy: $sortBy
        filter: $filter
      ) {
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
              name
              bio {
                markdown
              }
              profilePicture
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
            followersCount
            pinnedPost {
              id
              slug
              previousSlugs
              updatedAt
              publishedAt
              featuredAt
              reactionCount
              tags {
                id
                name
                slug
                logo
                tagline
              }
              url
              coverImage {
                url
                isPortrait
                attribution
                photographer
                isAttributionHidden
              }
              brief
              views
              responseCount
              replyCount
            }
            urlPattern
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
          }
          cursor
          role
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

export const GET_MY_POSTS_QUERY = gql`
  query getMyPosts(
    $pageSize: Int!
    $page: Int!
    $sortBy: UserPostsSort
    $filter: UserPostConnectionFilter
  ) {
    me {
      posts(
        pageSize: $pageSize
        page: $page
        sortBy: $sortBy
        filter: $filter
      ) {
        nodes {
          id
          slug
          previousSlugs
          updatedAt
          publishedAt
          featuredAt
          reactionCount
          tags {
            id
            name
            slug
            logo
            tagline
          }
          url
          coverImage {
            url
            isPortrait
            attribution
            photographer
            isAttributionHidden
          }
          brief
          views
          responseCount
          replyCount
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

export const GET_MY_BADGES_QUERY = gql`
  query getMyBadges {
    me {
      badges {
        id
        name
        description
        image
        dateAssigned
        infoURL
        suppressed
      }
    }
  }
`;

export const GET_MY_TECHSTACK_QUERY = gql`
  query GetUserTechstack($page: Int!, $pageSize: Int!) {
    me {
      techStack(pageSize: $pageSize, page: $page) {
        nodes {
          id
          name
          slug
          logo
          tagline
          info {
            markdown
          }
          postsCount
          followersCount
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

export const GET_MY_FOLLOWED_USERS_QUERY = gql`
  query GetMyUserFollows($page: Int!, $pageSize: Int!) {
    me {
      follows(pageSize: $pageSize, page: $page) {
        nodes {
          id
          username
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
          dateJoined
          isPro
          following
          deactivated
          tagline
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

export const GET_MY_FOLLOWERS_QUERY = gql`
  query GetUserFollowers($page: Int!, $pageSize: Int!) {
    me {
      followers(pageSize: $pageSize, page: $page) {
        nodes {
          id
          username
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
          dateJoined
          isPro
          following
          deactivated
          tagline
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
