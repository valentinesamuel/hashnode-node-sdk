import { gql } from 'graphql-request';

export const GET_USER_QUERY = gql`
  query GetUserByUsername($username: String!) {
    user(username: $username) {
      id
      name
      username
      bio {
        markdown
        text
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
      badges {
        id
        name
        description
        image
        dateAssigned
        infoURL
        suppressed
      }
      followersCount
      followingsCount
      tagline
      dateJoined
      location
      availableFor
      deactivated
      following
      followsBack
      isPro
    }
  }
`;

export const GET_USER_FOLLOWERS_QUERY = gql`
  query GetUserFollowers($username: String!, $page: Int!, $pageSize: Int!) {
    user(username: $username) {
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

export const GET_FOLLOWED_USERS_QUERY = gql`
  query GetUserFollows($username: String!, $page: Int!, $pageSize: Int!) {
    user(username: $username) {
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

export const GET_USER_TECHSTACK_QUERY = gql`
  query GetUserTechstack($username: String!, $page: Int!, $pageSize: Int!) {
    user(username: $username) {
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

export const GET_USER_BADGES_QUERY = gql`
  query getUserBadges($username: String!) {
    user(username: $username) {
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

export const GET_USER_PUBLICATIONS_QUERY = gql`
  query getUserPublications(
    $username: String!
    $first: Int!
    $after: String
    $sortBy: UserPublicationsSort
    $filter: UserPublicationsConnectionFilter
  ) {
    user(username: $username) {
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

export const GET_USER_POSTS_QUERY = gql`
  query getUserPosts(
    $username: String!
    $pageSize: Int!
    $page: Int!
    $sortBy: UserPostsSort
    $filter: UserPostConnectionFilter
  ) {
    user(username: $username) {
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

export const GET_USER_FOLLOWED_TAGS_QUERY = gql`
  query getUserPosts($username: String!) {
    user(username: $username) {
      tagsFollowing {
        id
        name
        slug
        logo
        tagline
        info {
          markdown
        }
        followersCount
        postsCount
      }
    }
  }
`;
