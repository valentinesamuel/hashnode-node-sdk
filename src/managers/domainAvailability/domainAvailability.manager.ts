import type { HashnodeSDKClient } from '../../client';
import type { CheckCustomDomainAvailabilityInput } from '../../generated/gqlQueryTypes';
import { BaseManager } from '../base.manager';
import {
  CHECK_CUSTOM_DOMAIN_AVAILABILITY_QUERY,
  CHECK_SUBDOMAIN_AVAILABILITY_QUERY,
} from './domainAvailability.queries';

export class DomainAvailabilityManager extends BaseManager {
  /**
   * Creates an instance of DomainAvailabilityManager.
   * @param client - The HashnodeSDKClient instance.
   */
  constructor(client: HashnodeSDKClient) {
    super(client, 'DomainAvailabilityManager');
  }

  /**
   * Retrieves the availability of a subdomain.
   * @param subdomain - The subdomain to check.
   * @returns A promise that resolves to the availability of the subdomain.
   */
  async checkSubdomainAvailability(subdomain: string) {
    const res = await this.makeRequest<{ checkSubdomainAvailability: boolean }>(
      'checkSubdomainAvailability',
      CHECK_SUBDOMAIN_AVAILABILITY_QUERY,
      { subdomain },
    );
    return res.checkSubdomainAvailability;
  }

  /**
   * Retrieves the availability of a custom domain.
   * @param input - The CheckCustomDomainAvailabilityInput object.
   * @returns A promise that resolves to the availability of the custom domain.
   */
  async checkCustomDomainAvailability(
    input: CheckCustomDomainAvailabilityInput,
  ) {
    const res = await this.makeRequest<{
      checkCustomDomainAvailability: boolean;
    }>(
      'checkCustomDomainAvailability',
      CHECK_CUSTOM_DOMAIN_AVAILABILITY_QUERY,
      {
        input,
      },
    );
    return res.checkCustomDomainAvailability;
  }
}
