import { gql } from 'graphql-request';

export const FOLLOW_TAGS_MUTATION = gql`
  mutation followTags($input: FollowTagsInput!) {
    followTags(input: $input) {
      tags {
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

export const UNFOLLOW_TAGS_MUTATION = gql`
  mutation followTags($input: UnfollowTagsInput!) {
    unfollowTags(input: $input) {
      tags {
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

export const SUBSCRIBE_TO_NEWSLETTER_MUTATION = gql`
mutation subscribeToNewsletterMutation($input: SubscribeToNewsletterInput!) {
  subscribeToNewsletter(input: $input) {
    status
  }
}
`

export const UNSUBSCRIBE_FROM_NEWSLETTER_MUTATION = gql`
mutation unsubscribeFromNewsletterMutation($input: UnsubscribeFromNewsletterInput!) {
  unsubscribeFromNewsletter(input: $input) {
    status
  }
}
`