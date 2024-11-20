import { gql } from 'graphql-request';

export const PUBLISH_POST_MUTATION = gql`
  mutation publishPostMutation($input: PublishPostInput!) {
    publishPost(input: $input) {
      post {
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
        }
        sourcedFromGithub
      }
    }
  }
`;

export const ADD_POST_TO_SERIES_MUTATION = gql`
  mutation AddPostToSeriesMutation($input: AddPostToSeriesInput!) {
    addPostToSeries(input: $input) {
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

export const UPDATE_POST_MUTATION = gql`
  mutation updatePostMutation($input: UpdatePostInput!) {
    updatePost(input: $input) {
      post {
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
        }
        sourcedFromGithub
      }
    }
  }
`;

export const REMOVE_POST_MUTATION = gql`
  mutation removePostMutation($input: RemovePostInput!) {
    removePost(input: $input) {
      post {
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
        }
        sourcedFromGithub
      }
    }
  }
`;

export const LIKE_POST_MUTATION = gql`
  mutation likePostMutation($input: LikePostInput!) {
    likePost(input: $input) {
      post {
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
        }
        sourcedFromGithub
      }
    }
  }
`;

export const RESTORE_POST_MUTATION = gql`
  mutation restorePostMutation($input: RestorePostInput!) {
    restorePost(input: $input) {
      post {
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
        }
        sourcedFromGithub
      }
    }
  }
`;

export const PUBLISH_DRAFT_MUTATION = gql`
  mutation publishDraftMutation($input: PublishDraftInput!) {
    publishDraft(input: $input) {
      post {
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
        }
        sourcedFromGithub
      }
    }
  }
`;

export const CREATE_DRAFT_MUTATION = gql`

`

