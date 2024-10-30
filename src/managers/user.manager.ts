import type { HashnodeSDKClient } from '../client';

export class UserManager {
  private readonly client: HashnodeSDKClient;
  constructor(client: HashnodeSDKClient) {
    console.log('UserManager created');
    this.client = client;
  }

  getUser(username: string) {
    const res = this.client._request({
      query: `
            query GetUserById($input: String!) {
                user(username: $input) {
                    id
                    name
                    username
                }
            }
            `,
      variables: {
        input: username,
      },
    });
    return res;
  }
}
