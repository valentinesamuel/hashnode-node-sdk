import { gql } from 'graphql-request';

export const CHECK_SUBDOMAIN_AVAILABILITY_QUERY = gql`
    query checkSubdomainAvailability($subdomain: String!) {
        checkSubdomainAvailability(subdomain: $subdomain) {
        subdomainAvailable
        }
    }
`

export const CHECK_CUSTOM_DOMAIN_AVAILABILITY_QUERY = gql`
    query checkCustomDomainAvailability($input: CheckCustomDomainAvailabilityInput!) {
    checkCustomDomainAvailability(input: $input) {
        domainAvailable
        }
    }
`