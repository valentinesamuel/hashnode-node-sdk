import type { HashnodeSDKClient } from '../client';

export class BaseManager {
  protected readonly client: HashnodeSDKClient;
  private readonly managerName: string;

  constructor(client: HashnodeSDKClient, managerName: string) {
    this.client = client;
    this.managerName = managerName;
  }

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
