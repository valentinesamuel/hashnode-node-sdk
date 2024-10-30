import type { HashnodeSDKClient } from "../client";
import gqlRequest from "../utils/request";

export class UserManager {
   
    constructor(client: HashnodeSDKClient) {
        console.log('UserManager created');

    }


    getUser(username: string) {
        const res = gqlRequest({
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
        })
        return res;
    }
}