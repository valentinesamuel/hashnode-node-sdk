import { gql } from 'graphql-request';

export const CREATE_SERIES_MUTATION = gql`
  mutation createSeriesMutation($input: CreateSeriesInput!) {
    createSeries(input: $input) {
      series {
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
          followersCount
          followingsCount
          location
          following
          followsBack
          isPro
        }
        slug
      }
    }
  }
`;

export const UPDATE_SERIES_MUTATION = gql`
  mutation updateSeriesMutation($input: UpdateSeriesInput!) {
    updateSeries(input: $input) {
      series {
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
          followersCount
          followingsCount
          location
          following
          followsBack
          isPro
        }
        slug
      }
    }
  }
`;

export const REMOVE_SERIES_MUTATION = gql`
  mutation removeSeriesMutation($input: RemoveSeriesInput!) {
    removeSeries(input: $input) {
      series {
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
          followersCount
          followingsCount
          location
          following
          followsBack
          isPro
        }
        slug
      }
    }
  }
`;
