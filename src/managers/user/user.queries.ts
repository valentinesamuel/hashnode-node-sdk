import { gql } from 'graphql-request'

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

`