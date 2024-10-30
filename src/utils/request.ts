import { GraphQLClient } from "graphql-request";
import { LibConfig } from "./config";

const gqlClient = new GraphQLClient(LibConfig.HASHNODE_API_ENDPOINT as string, {
    headers: {
        "Content-Type": "application/json",
        Authorization: `${LibConfig.HASHNODE_API_TOKEN}`
    }
})

export const gqlRequest = async (query: string, variables?: Record<string, any>) => {
    try {
        const data = await gqlClient.request(query, variables);
        return data;
    } catch (error) {
        console.error("GraphQL request failed:", error);
        throw error;
    }
}

export default gqlRequest;