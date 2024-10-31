import type { HashnodeSDKClient } from '../../client';
import { UserPostsSort, UserPublicationsSort, type Badge, type MyUser, type Tag, type User, type UserConnection, type UserPostConnection, type UserPostConnectionFilter, type UserPublicationsConnection, type UserPublicationsConnectionFilter, type UserTagsConnection } from '../../generated/gqlQueryTypes';
import { GET_USER_QUERY } from './user.queries';

export class UserManager {
  private readonly client: HashnodeSDKClient;
  constructor(client: HashnodeSDKClient) {
    console.log('UserManager created');
    this.client = client;
  }

  async getUser(username: string) {
    const res = await this.client._request({
      query: GET_USER_QUERY,
      variables: {
        username,
      },
    });
    return res.data.user as User;
  }

  async getMe() {
    const res = await this.client._request({
      query: `
      query {
          me {
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
            role
          }
        }
        `,
    });
    console.log(res);
    return res as MyUser;
  }

  async getUserFollowers(username: string, page: number, pageSize: number) {
    const res = await this.client._request({
      query: `
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
        socialMediaLinks{
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
      `,
      variables: {
        username,
        page,
        pageSize,
      },
    });
    return res.data.user.followers as UserConnection;
  }

  async getFollowedUsers(username: string, page: number, pageSize: number) {
    const res = await this.client._request({
      query: `
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
        socialMediaLinks{
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
      `,
      variables: {
        username,
        page,
        pageSize,
      },
    });
    return res.data.user.follows as UserConnection;
  }

  async getUserTechStack(username: string, page: number, pageSize: number) {
    const res = await this.client._request({
      query: `
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
      `,
      variables: {
        username,
        page,
        pageSize,
      },
    });
    return res.data.user.techStack as UserTagsConnection;
  }

  async getUserBadges(username: string, page: number, pageSize: number) {
    const res = await this.client._request({
      query: `
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
  `,
      variables: {
        username,
      },
    });
    return res.data.user.badges as Badge[];
  }

  async getUserPublications(
    username: string,
    first: number,
    after: string,
    filter: UserPublicationsConnectionFilter,
    sortBy: UserPublicationsSort = UserPublicationsSort.DateCreatedDesc,
  ) {
    const res = await this.client._request({
      query: `
  query getUserPublications($username: String!, $first: Int!, $after: String, $sortBy: UserPublicationsSort, $filter: UserPublicationsConnectionFilter) {
    user(username: $username) {
    publications(first: $first, after: $after, sortBy: $sortBy, filter: $filter) {
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
      `,
      variables: {
        username,
        first,
        after,
        sortBy,
        filter,
      },
    });
    return res.data.user.publications as UserPublicationsConnection;
  }

  async getUserPosts(
    username: string,
    first: number,
    after: string,
    filter: UserPostConnectionFilter,
    sortBy: UserPostsSort = UserPostsSort.DatePublishedDesc,
  ) {
    const res = await this.client._request({
      query: `
   query getUserPosts($username: String!, $pageSize: Int!, $page: Int!, $sortBy: UserPostsSort, $filter: UserPostConnectionFilter) {
    user(username: $username) {
    posts(pageSize: $pageSize, page: $page, sortBy: $sortBy, filter: $filter) {
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
      `,
      variables: {
        username,
        first,
        after,
        sortBy,
        filter,
      },
    });
    return res.data.user.posts as UserPostConnection;
  }

  async getUserFollowedTags(username: string) {
    const res = await this.client._request({
      query: `
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
      `,
      variables: {
        username,
      },
    });
    return res.data.user.tagsFollowing as Tag[];
  }
}
