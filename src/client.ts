import { UserManager } from './managers/user/user.manager';

interface ClientOptions {
  apiKey: string;

  baseUrl: string;
}

/**
 * Represents a client for interacting with the Hashnode API.
 */
export class HashnodeSDKClient {
  /**
   * The API key used for authenticating requests to the Hashnode API.
   */
  private readonly apiKey: string;

  /**
   * The base URL for the Hashnode API.
   */
  private readonly baseUrl: string;

  public readonly userManager: UserManager;

  /**
   * Creates an instance of HashnodeSDKClient.
   *
   * @param options - The options for configuring the client.
   * @param options.apiKey - The API key used for authenticating requests.
   * @param options.baseUrl - The base URL for the Hashnode API.
   */
  constructor({ apiKey, baseUrl }: ClientOptions) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl || 'https:/gql.hashnode.com';

    this.userManager = new UserManager(this);
  }

  _request = async ({
    query,
    variables,
  }: {
    query: string;
    variables?: Record<string, any>;
  }) => {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${this.apiKey}`,
        },
        body: JSON.stringify({ query, variables }),
      });

      return response.json();
    } catch (error) {
      console.error('GraphQL request failed:', error);
      throw error;
    }
  };
}
