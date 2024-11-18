import { gql } from 'graphql-request';

export const GET_POST_QUERY = gql`
  query getPosts($postId: ID!) {
    post(id: $postId) {
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
`;

export const GET_POST_PUBLICATION_QUERY = gql`
  query getPostsPublication($postId: ID!) {
    post(id: $postId) {
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
        }
        preferences {
          logo
          darkMode {
            enabled
            logo
          }
          enabledPages {
            badges
            newsletter
            members
          }
          navbarItems {
            id
            label
            url
            type
            page {
              id
              slug
              title
            }
          }
          layout
          disableFooterBranding
          isSubscriptionModalDisabled
        }
      }
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getPostComments(
    $postId: ID!
    $first: Int!
    $after: String
    $sortBy: PostCommentSortBy
  ) {
    post(id: $postId) {
      comments(first: $first, after: $after, sortBy: $sortBy) {
        edges {
          node {
            id
            content {
              markdown
            }
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
            dateAdded
            stamp
            totalReactions
            myTotalReactions
          }
          cursor
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

export const GET_POST_COMMENTERS = gql`
  query getPostCommenters(
    $postId: ID!
    $first: Int!
    $after: String
    $sortBy: PostCommenterSortBy
  ) {
    post(id: $postId) {
      commenters(first: $first, after: $after, sortBy: $sortBy) {
        edges {
          node {
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
          cursor
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

export const GET_POST_LIKERS = gql`
  query getPostLikers(
    $postId: ID!
    $first: Int!
    $after: String
    $filter: PostLikerFilter
  ) {
    post(id: $postId) {
      likedBy(first: $first, after: $after, filter: $filter) {
        edges {
          node {
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
          cursor
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

export const GET_DRAFT_POST_QUERY = gql`
  query queryDraftPost($id: ObjectId!) {
    draft(id: $id) {
      id
      slug
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
      publishAs {
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
      tagsV2
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
        attribution
        photographer
        isAttributionHidden
      }
      readTimeInMinutes
      series {
        id
        name
        slug
      }
      content {
        markdown
      }
      updatedAt
      settings {
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
      features {
        tableOfContents {
          isEnabled
          items {
            id
            level
            slug
            title
          }
        }
      }
      lastBackup {
        status
        at
      }
      lastSuccessfulBackupAt
      lastFailedBackupAt
      scheduledDate
      isSubmittedForReview
      publishedPost {
        id
        slug
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
      }
    }
  }
`;

export const GET_SCHEDULED_POST_QUERY = gql`
  query getScheduledPost($id: ObjectId!) {
    scheduledPost(id: $id) {
      id
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
      draft {
        id
        slug
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
        publishAs {
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
          attribution
          photographer
          isAttributionHidden
        }
        readTimeInMinutes
        series {
          id
          name
          slug
        }
        content {
          markdown
        }
        updatedAt
        settings {
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
        features {
          tableOfContents {
            isEnabled
            items {
              id
              level
              slug
              title
            }
          }
        }
        lastBackup {
          status
          at
        }
        lastSuccessfulBackupAt
        lastFailedBackupAt
        scheduledDate
        isSubmittedForReview
        publishedPost {
          id
          slug
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
        }
      }
      scheduledDate
      scheduledBy {
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
    }
  }
`;

export const GET_FEED_POST = gql`
  query getFeedPost($first: Int!, $after: String, $filter: FeedFilter!) {
    feed(first: $first, after: $after, filter: $filter) {
      edges {
        node {
          id
          slug
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
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

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

export const LIKE_COMMENT_MUTATION = gql`
  mutation likeCommentMutation($input: LikeCommentInput!) {
    likeComment(input: $input) {
      comment {
        id
        content {
          markdown
        }
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
        dateAdded
        stamp
        totalReactions
        myTotalReactions
      }
    }
  }
`;

export const LIKE_REPLY_MUTATION = gql`
  mutation likeReplyMutation($input: LikeReplyInput!) {
    likeReply(input: $input) {
      reply {
        id
        content {
          markdown
        }
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
        dateAdded
        stamp
        totalReactions
        myTotalReactions
      }
    }
  }
`;

export const ADD_COMMENT_MUTATION = gql`
  mutation addCommentMutation($input: AddCommentInput!) {
    addComment(input: $input) {
      comment {
        id
        content {
          markdown
        }
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
        dateAdded
        stamp
        totalReactions
        myTotalReactions
      }
    }
  }
`;

export const UPDATE_COMMENT_MUTATION = gql`
  mutation updateCommentMutation($input: UpdateCommentInput!) {
    updateComment(input: $input) {
      comment {
        id
        content {
          markdown
        }
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
        dateAdded
        stamp
        totalReactions
        myTotalReactions
      }
    }
  }
`;

export const REMOVE_COMMENT_MUTATION = gql`
  mutation removeCommentMutation($input: RemoveCommentInput!) {
    removeComment(input: $input) {
      comment {
        id
        content {
          markdown
        }
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
        dateAdded
        stamp
        totalReactions
        myTotalReactions
      }
    }
  }
`;

export const ADD_REPLY_MUTATION = gql`
  mutation addReplyMutation($input: AddReplyInput!) {
    addReply(input: $input) {
      reply {
        id
        content {
          markdown
        }
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
        dateAdded
        stamp
        totalReactions
        myTotalReactions
      }
    }
  }
`;

export const UPDATE_REPLY_MUTATION = gql`
  mutation updateReplyMutation($input: UpdateReplyInput!) {
    updateReply(input: $input) {
      reply {
        id
        content {
          markdown
        }
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
        dateAdded
        stamp
        totalReactions
        myTotalReactions
      }
    }
  }
`;

export const REMOVE_REPLY_MUTATION = gql`
  mutation removeReplyMutation($input: RemoveReplyInput!) {
    removeReply(input: $input) {
      reply {
        id
        content {
          markdown
        }
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
        dateAdded
        stamp
        totalReactions
        myTotalReactions
      }
    }
  }
`;
