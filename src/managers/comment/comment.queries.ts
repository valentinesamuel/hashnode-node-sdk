import { gql } from 'graphql-request';

export const GET_TOP_COMMENTERS_QUERY = gql`
  query getTopCommenters($first: Int!, $after: String) {
    topCommenters(first: $first, after: $after) {
      edges {
        node {
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
          badges {
            id
            name
            description
            image
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
          deactivated
          following
          followsBack
          isPro
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_TAG_BY_SLUG_QUERY = gql`
  query getTagBySlug($slug: String!) {
    tag(slug: $slug) {
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
`;
