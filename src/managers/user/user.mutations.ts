import { gql } from 'graphql-request';

export const TOGGLE_FOLLOW_USER_MUTATION = gql`
mutation toggleFollowUser($id: ID, $username: String) {
  toggleFollowUser(id: $id, username: $username) {
    user {
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
    }
  }
}
`
