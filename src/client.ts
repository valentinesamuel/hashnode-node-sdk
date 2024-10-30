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

  /**
   * Creates an instance of HashnodeSDKClient.
   *
   * @param options - The options for configuring the client.
   * @param options.apiKey - The API key used for authenticating requests.
   * @param options.baseUrl - The base URL for the Hashnode API.
   */
  constructor({ apiKey, baseUrl }: ClientOptions) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }
}
