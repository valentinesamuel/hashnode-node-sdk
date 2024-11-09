import {gql} from  'graphql-request'

export const GET_PUBLICATION_QUERY = gql`
    query getPublication($id: ObjectId, $host: String) {
        publication(id: $id, host: $host) {
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
                    series {
                        id
                        name
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
                    page {
                        id
                        title
                        slug
                    }
                }
                layout
                disableFooterBranding
                isSubscriptionModalDisabled
            }
            followersCount
            imprintV2 {
                markdown
            }
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
            domainInfo {
                hashnodeSubdomain
                domain {
                    host
                    ready
                    status
                    verifiedAt
                }
                wwwPrefixedDomain {
                    host
                    ready
                    status
                    verifiedAt
                }
            }
            isHeadless
            pinnedPost {
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
            }
            ogMetaData {
                image
            }
            features {
                newsletter {
                    isEnabled
                    frequency
                }
                viewCount {
                    isEnabled
                }
                readTime {
                    isEnabled
                }
                textSelectionSharer {
                    isEnabled
                }
                customCSS {
                    isEnabled
                    published {
                        home
                        post
                        static
                        homeMinified
                        postMinified
                        staticMinified
                    }
                    draft {
                        home
                    }
                }
                headlessCMS {
                    isEnabled
                }
                proTeam {
                    isEnabled
                }
                gptBotCrawling {
                    isEnabled
                }
            }
            isGitHubBackupEnabled
            isGithubAsSourceConnected
            urlPattern
            emailImport {
                currentImport {
                    status
                    importStartedAt
                    successfullyImported
                    attemptedToImport
                    filename
                }
            }
            redirectionRules {
                id
                type
                source
                destination
            }
            hasBadges
            sponsorship {
                content {
                    markdown
                }
                stripe {
                    connected
                    accountId
                    country
                }
            }
            recommendedPublications {
                node {
                    id
                    title
                    displayTitle
                    about {
                        markdown
                    }
                    url
                    canonicalURL
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
                }
            }
            totalRecommendedPublications
            allowContributorEdits
        }
    }
`