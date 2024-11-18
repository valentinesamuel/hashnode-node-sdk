import { gql } from 'graphql-request';

export const RECOMMEND_PUBLICATIONS_MUTATION = gql`
  mutation recommendPublication($input: RecommendPublicationsInput!) {
    recommendPublications(input: $input) {
      recommendedPublications {
        totalFollowersGained
        node {
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
          ogMetaData {
            image
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
        }
      }
    }
  }
`;

export const REMOVE_PUBLICATION_RECOMMENDATION_MUTATION = gql`
  mutation removeRecommendations($input: RemoveRecommendationInput!) {
    removeRecommendation(input: $input) {
      recommendedPublication {
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
        ogMetaData {
          image
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
      }
    }
  }
`;

export const TOGGLE_ALLOW_CONTRIBUTOR_EDITS_MUTATION = gql`
  mutation toggleAllowContributorEditsMutation(
    $input: ToggleAllowContributorEditsInput!
  ) {
    toggleAllowContributorEdits(input: $input) {
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
      }
    }
  }
`;

export const TOGGLE_TEXT_SELECTION_SHARER_MUTATION = gql`
  mutation toggleTextSelectionSharerMutation(
    $input: ToggleTextSelectionSharerInput!
  ) {
    toggleTextSelectionSharer(input: $input) {
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
      }
    }
  }
`;

export const TOGGLE_GPT_BOT_CRAWLING_MUTATION = gql`
  mutation toggleGPTBotCrawlingMutation($input: ToggleGPTBotCrawlingInput!) {
    toggleGPTBotCrawling(input: $input) {
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
      }
    }
  }
`;
