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

export const INVITE_USERS_TO_PUBLICATION_MUTATION = gql`
  mutation inviteUsersToPublicationMutation(
    $input: InviteUsersToPublicationInput!
  ) {
    inviteUsersToPublication(input: $input) {
      success
      failedInvites {
        email
        username
        errorMessage
      }
      successfulInviteCount
    }
  }
`;

export const REINVITE_USERS_TO_PUBLICATION_MUTATION = gql`
  mutation reInviteUsersToPublicationMutation(
    $input: ReinviteUserToPublicationInput!
  ) {
    reinviteUserToPublication(input: $input) {
      success
    }
  }
`;

export const REVOKE_USER_INVITE_TO_PUBLICATION_MUTATION = gql`
  mutation revokeUserInviteToPublicationMutation(
    $input: RevokeUserInviteToPublicationInput!
  ) {
    revokeUserInviteToPublication(input: $input) {
      success
    }
  }
`;

export const ACCEPT_INVITE_TO_PUBLICATION_MUTATION = gql`
  mutation acceptInviteToPublicationMutation(
    $input: AcceptInviteToPublicationInput!
  ) {
    acceptInviteToPublication(input: $input) {
      success
    }
  }
`;

export const CHANGE_PUBLICATION_MEMBER_ROLE_MUTATION = gql`
  mutation changePublicationMemberRoleMutation(
    $input: ChangePublicationMemberRoleInput!
  ) {
    changePublicationMemberRole(input: $input) {
      member {
        id
        user {
          id
          name
          username
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
        }
        role
        privacyState
      }
    }
  }
`;

export const REMOVE_PUBLICATION_MEMBER_MUTATION = gql`
  mutation removePublicationMemberMutation(
    $input: RemovePublicationMemberInput!
  ) {
    removePublicationMember(input: $input) {
      member {
        id
        user {
          id
          name
          username
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
        }
        role
        privacyState
      }
    }
  }
`;

export const CREATE_ROLE_BASED_INVITE_FOR_PUBLICATION_MUTATION = gql`
  mutation createRoleBasedInviteForPublicationMutation(
    $input: CreateRoleBasedInviteForPublicationInput!
  ) {
    createRoleBasedInviteForPublication(input: $input) {
      invite {
        id
        role
        isUnlimitedCapacity
        usedCapacity
        capacity
        inviteLink
        createdAt
        expiryDate
      }
    }
  }
`;

export const UPDATE_ROLE_BASED_INVITE_MUTATION = gql`
  mutation updateRoleBasedInviteMutation($input: UpdateRoleBasedInviteInput!) {
    updateRoleBasedInvite(input: $input) {
      invite {
        id
        role
        isUnlimitedCapacity
        usedCapacity
        capacity
        inviteLink
        createdAt
        expiryDate
      }
    }
  }
`;

export const ACCEPT_ROLE_BASED_INVITE_MUTATON = gql`
  mutation acceptRoleBasedInviteMutation($input: AcceptRoleBasedInviteInput!) {
    acceptRoleBasedInvite(input: $input) {
      success
    }
  }
`;

export const DELETE_ROLE_BASED_INVITE_MUTATION = gql`
  mutation deleteRoleBasedInviteMutation($input: DeleteRoleBasedInviteInput!) {
    deleteRoleBasedInvite(input: $input) {
      invite {
        id
        role
        isUnlimitedCapacity
        usedCapacity
        capacity
        inviteLink
        createdAt
        expiryDate
      }
    }
  }
`;

export const CHANGE_PUBLICATION_MEMBER_VISIBILITY_MUTATION = gql`
  mutation changePublicationMemberVisibilityMutation(
    $input: ChangePublicationMemberVisibilityInput!
  ) {
    changePublicationMemberVisibility(input: $input) {
      member {
        id
        user {
          id
          name
          username
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
        }
        role
        privacyState
      }
    }
  }
`;

export const TOGGLE_ROLE_BASED_INVITE_LINKS_MUTATION = gql`
  mutation toggleRoleBasedInviteLinksMutation($input: ID!) {
    toggleRoleBasedInviteLinks(publicationId: $input) {
      areRoleBasedInviteLinksActive
    }
  }
`;
