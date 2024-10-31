import type { HashnodeSDKClient } from '../client';

export class UserManager {
  private readonly client: HashnodeSDKClient;
  constructor(client: HashnodeSDKClient) {
    console.log('UserManager created');
    this.client = client;
  }

  getUser(username: string) {
    const res = this.client._request({
      query: `
        query GetUserByUsername($input: String!) {
          user(username: $input) {
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
          `,
      variables: {
        input: username,
      },
    });
    return res;
  }

  getMe() {
    const res = this.client._request({
      query: `
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
        `,
    });
    return res;
  }

  getUserFollowers(username: string, page: number, pageSize: number) {
    const res = this.client._request({
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
    return res;
  }

}
