import { DocumentationProjectManager } from './managers/documentationProject/documentationProject.manager';
import { DomainAvailabilityManager } from './managers/domainAvailability/domainAvailability.manager';
import { MeManager } from './managers/me/me.manager';
import { MiscellaneousManager } from './managers/misc/misc.manager';
import { PostManager } from './managers/posts/post.manager';
import { PublicationManager } from './managers/publication/publication.manager';
import { UserManager } from './managers/user/user.manager';
import { CommentManager } from './managers/comment/comment.manager';
import { WebhookManager } from './managers/webhook/webhook.manager';

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
   * The user manager for managing user-related operations.
   */
  public readonly userManager: UserManager;

  /**
   * The manager for managing operations related to the authenticated user.
   */
  public readonly meManager: MeManager;

  /**
   * The manager for managing operations related to check for available domains.
   */
  public readonly domainAvailabilityManager: DomainAvailabilityManager;

  /**
   * The manager for managing miscellaneous operations.
   */
  public readonly miscManager: MiscellaneousManager;

  /**
   * The manager for managing documentationProject operations.
   */
  public readonly documentationProjectManager: DocumentationProjectManager;

  /**
   * The manager for managing publication related operations
   */
  public readonly publicationManager: PublicationManager;

  /**
   * The manager for managing post related operations
   */
  public readonly postManager: PostManager;

  /**
   * The manager for managing comment related operations
   */
  public readonly commentManger: CommentManager;

  /**
   * The manager for managing webhook related operations
   */
  public readonly webhookManager: WebhookManager;

  /**
   * Creates an instance of HashnodeSDKClient.
   *
   * @param options - The options for configuring the client.
   * @param options.apiKey - The API key used for authenticating requests.
   * @param options.baseUrl - The base URL for the Hashnode API.
   */
  constructor({ apiKey, baseUrl }: ClientOptions) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl || 'https://gql.hashnode.com';

    if (!this.apiKey) {
      throw new Error('An API key is required to create a client.');
    }

    this.userManager = new UserManager(this);
    this.meManager = new MeManager(this);
    this.domainAvailabilityManager = new DomainAvailabilityManager(this);
    this.miscManager = new MiscellaneousManager(this);
    this.documentationProjectManager = new DocumentationProjectManager(this);
    this.publicationManager = new PublicationManager(this);
    this.postManager = new PostManager(this);
    this.commentManger = new CommentManager(this);
    this.webhookManager = new WebhookManager(this);
  }

  /**
   * Makes a GraphQL request to the Hashnode API
   * @private
   * @param {Object} params - The request parameters
   * @param {string} params.query - The GraphQL query string
   * @param {Record<string, any>} [params.variables] - Optional variables for the GraphQL query
   * @returns {Promise<any>} The parsed JSON response from the API
   * @throws {Error} If the GraphQL request fails
   */
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
