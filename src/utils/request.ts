import { GraphQLClient } from 'graphql-request';
import { LibConfig } from './config';

/**
 * Creates an instance of GraphQLClient configured to interact with the Hashnode API.
 *
 * @constant
 * @type {GraphQLClient}
 *
 * @param {string} LibConfig.HASHNODE_API_ENDPOINT - The endpoint URL for the Hashnode API.
 * @param {string} LibConfig.HASHNODE_API_TOKEN - The authorization token for accessing the Hashnode API.
 *
 * @property {Object} headers - The headers to be sent with each request.
 * @property {string} headers.Content-Type - The content type of the request, set to 'application/json'.
 * @property {string} headers.Authorization - The authorization token for the Hashnode API.
 */
const gqlClient = new GraphQLClient(LibConfig.HASHNODE_API_ENDPOINT as string, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${LibConfig.HASHNODE_API_TOKEN}`,
  },
});

/**
 * Sends a GraphQL request using the provided query and variables.
 *
 * @param query - The GraphQL query string to be executed.
 * @param variables - An optional object containing variables for the GraphQL query.
 * @returns A promise that resolves to the data returned by the GraphQL request.
 * @throws Will throw an error if the GraphQL request fails.
 */
export const gqlRequest = async ({
  query,
  variables,
}: {
  query: string,
  variables?: Record<string, any>
},
) => {
  try {
    const data = await gqlClient.request(query, { input: variables });
    return data;
  } catch (error) {
    console.error('GraphQL request failed:', error);
    throw error;
  }
};

export default gqlRequest;
