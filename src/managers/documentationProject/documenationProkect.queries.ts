import { gql } from 'graphql-request';

export const GET_DOCUMENTATION_PROJECT_QUERY = gql`
    query getDocumentationProjectQuery($id: ID, $host: String) {
        documentationProject(id: $id, host: $host) {
            id
            name
            description
            settings {
                isRobotsAllowed
                isHashnodeLoginAllowed
                isHeadless
            }
            links {
                twitter
                instagram
                github
                website
                hashnode
                youtube
                dailydev
                linkedin
                mastodon
                githubRepository
            }
            createdAt
            updatedAt
            appearance {
                logoUrl
                logoDarkThemeUrl
                favIconUrl
                primaryColor
                defaultDocsTheme
                getStarted {
                    label
                    url
                }
                customScript
            }
            integrations {
                fbPixelID
                hotjarSiteID
                gaTrackingID
                gTagManagerID
                intercomID
                metaTags
            }
            features {
                collaboration {
                    isEnabled
                }
                ghSync {
                    isEnabled
                }
                versioning {
                    isEnabled
                }
            }
            url
            owner {
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
            subscription {
                status
                productName
                nextBillingCycle
                maxSeats
            }
            ai {
                prompts {
                    id
                    prompt
                    createdAt
                }
                settings {
                    isSearchEnabled
                }
            }
        }
    }
`

export const GET_DOCUMENTATION_PROJECT_V2_MEMBER_QUERY = gql`
    query getDocumentationProjectV2MembersQuery($pageSize: Int!, $page: Int!, $filter: DocumentationProjectMemberConnectionFilter) {
        documentationProject {
            membersV2(pageSize: $pageSize, page: $page, filter: $filter) {
                nodes {
                    id
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
                    role
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
`

export const GET_DOCUMENTATION_PROJECT_CUSTOM_PAGES = gql`
    query getDocumentationProjectCustomPagesQuery($pageSize: Int!, $page: Int!) {
        documentationProject {
            customPages(pageSize: $pageSize, page: $page) {
                nodes {
                    id
                    title
                    slug
                    content {
                        md
                        mdx
                    }
                    ogMetaData {
                        image
                    }
                    seo {
                        title
                        description
                    }
                    lastModified
                    visibility
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
`

export const GET_DOCUMENTATION_PROJECT_CUSTOM_PAGE_QUERY = gql`
query getDocumentationProjectCustomPageQuery($slug: String!) {
  documentationProject {
    customPage(slug: $slug) {
      id
      title
      slug
      content {
        md
        mdx
      }
      ogMetaData {
        image
      }
      seo {
        title
        description
      }
      lastModified
      visibility
    }
  }
}
`

export const GET_DOCUMENTATION_PROJECT_PENDING_INVITES = gql`
    query getDocumentationProjectPendingInvitesQuery($pageSize: Int!, $page: Int!) {
        documentationProject {
            pendingInvites(pageSize: $pageSize, page: $page) {
                nodes {
                    id
                    user {
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
                    role
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
`

export const GET_DOCUMENTATION_PROJECT_GUIDE_QUERY = gql`
    query getDocumentationProjectGuide($id: ID, $slug: String) {
        documentationProject(id: $id) {
            guide(slug: $slug) {
                __typename
            }
        }
    }
`

export const GET_DOCUMENTATION_PROJECT_GUIDES_QUERY = gql`
    query getDocumentationProjectGuides($id: ID) {
        documentationProject(id: $id) {
            guides {
                __typename
            }
        }
    }
`
export const GET_DOCUMENTATION_PROJECT_PUBLISHED_GUIDE_QUERY = gql`
    query getDocumentationProjectPublishedGuide($id: ID, $slug: String) {
        documentationProject(id: $id) {
            publishedGuide (slug: $slug) {
                __typename
            }
        }
    }
`

export const GET_DOCUMENTATION_PROJECT_DEFAULT_GUIDE_QUERY = gql`
    query getDocumentationProjectDefaultdGuide($id: ID) {
        documentationProject(id: $id) {
            defaultGuide {
                __typename
            }
        }
    }
`

export const GET_DOCUMENTATION_PROJECT_PUBLISHED_GUIDES_QUERY = gql`
    query getDocumentationProjectPublishedGuides($id: ID) {
        documentationProject(id: $id) {
            publishedGuides {
                __typename
            }
        }
    }
`

export const GET_DOCUMENTATION_PROJECT_VIEWS_QUERY = gql`
    query getDocumentationProjectViews($id: ID, $first: Int!, $after: String, $filter: ProjectViewsFilter, $groupBy: ProjectViewsGroupBy, $sortBy: ProjectViewsSortBy, $options: ProjectViewsOptions) {
        documentationProject(id: $id) {
            analytics {
                views(
                    first: $first
                    after: $after
                    filter: $filter
                    groupBy: $groupBy
                    sortBy: $sortBy
                    options: $options
                ) {
                    edges {
                        node {
                            id
                            total
                        }
                        cursor
                    }
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                }
            }
        }
    }
`

export const GET_DOCUMENTATION_PROJECT_VISITORS_QUERY = gql`
query getDocumentationProjectVisitors($id: ID, $first: Int!, $after: String, $filter: ProjectVisitorsFilter, $groupBy: ProjectVisitorsGroupBy, $options: ProjectVisitorsOptions) {
  documentationProject(id: $id) {
    analytics {
      visitors(
        first: $first
        after: $after
        filter: $filter
        groupBy: $groupBy
        options: $options
      ) {
        edges {
          node {
            id
            total
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
}
`

export const GET_DOCUMENTATION_PROJECT_NAVIGATION_QUERY = gql`
query getDocumentationProjectNavigation {
  documentationProject {
    navigation {
      header {
        __typename
      }
      footer {
        id
        label
        items {
          __typename
        }
        createdAt
        updatedAt
      }
    }
  }
}
`

export const SEARCH_DOCUMENTATION_PROJECT_USERS_QUERY = gql`
query searchDocumentationProjectUsers($input: DocumentationProjectSearchUsersInput!) {
  documentationProject {
    searchUsers(input: $input) {
      edges {
        status
        node {
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
`