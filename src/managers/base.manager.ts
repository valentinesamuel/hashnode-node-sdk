import type { HashnodeSDKClient } from '../client';

/**
 * BaseManager class provides a foundation for making GraphQL requests
 * using the HashnodeSDKClient. It handles the client initialization and
 * provides a method to make requests with error handling.
 */
export class BaseManager {
  /**
   * The client used to make GraphQL requests.
   */
  protected readonly client: HashnodeSDKClient;

  /**
   * The name of the manager, used for logging purposes.
   */
  private readonly managerName: string;

  /**
   * Constructs a new instance of BaseManager.
   *
   * @param client - The HashnodeSDKClient instance to be used for making requests.
   * @param managerName - The name of the manager.
   */
  constructor(client: HashnodeSDKClient, managerName: string) {
    this.client = client;
    this.managerName = managerName;
  }

  /**
   * Makes a GraphQL request using the provided query and variables.
   *
   * @template T - The expected type of the response data.
   * @param operationName - The name of the operation, used for logging purposes.
   * @param query - The GraphQL query string.
   * @param variables - The variables to be passed with the query.
   * @returns A promise that resolves to the response data of type T.
   * @throws Will throw an error if the GraphQL request fails.
   */
  protected async makeRequest<T>(
    operationName: string,
    query: string,
    variables: Record<string, any> = {},
  ): Promise<T> {
    const response = await this.client._request({
      query,
      variables,
    });

    if (response.errors) {
      console.error(
        `${this.managerName}.${operationName} failed:`,
        response.errors,
      );
      throw new Error('GraphQL request failed');
    }

    return response.data as T;
  }
}
