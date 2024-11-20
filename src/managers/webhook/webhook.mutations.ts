import { gql } from 'graphql-request';

export const CREATE_WEBHOOK_MUTATION = gql`
  mutation createWebhookMutation($input: CreateWebhookInput!) {
    createWebhook(input: $input) {
      webhook {
        id
        url
        events
        secret
        createdAt
        updatedAt
      }
    }
  }
`;

export const UPDATE_WEBHOOK_MUTATION = gql`
  mutation updateWebhookMutation($input: UpdateWebhookInput!) {
    updateWebhook(input: $input) {
      webhook {
        id
        url
        events
        secret
        createdAt
        updatedAt
      }
    }
  }
`;

export const DELETE_WEBHOOK_MUTATION = gql`
  mutation deleteWebhookMutation($input: ID!) {
    deleteWebhook(id: $input) {
      webhook {
        id
        url
        events
        secret
        createdAt
        updatedAt
      }
    }
  }
`;

export const TRIGGER_WEBHOOK_TEST_MUTATION = gql`
  mutation triggerWebhookTestMutation($input: TriggerWebhookTestInput!) {
    triggerWebhookTest(input: $input) {
      webhook {
        id
        url
        events
        secret
        createdAt
        updatedAt
      }
    }
  }
`;

export const RESEND_WEBHOOK_TEST_MUTATION = gql`
  mutation resendWebhookTestMutation($input: ResendWebhookRequestInput!) {
    resendWebhookRequest(input: $input) {
      webhookMessage {
        id
        url
        event
        isError
        isTest
        isResent
        request {
          uuid
          error {
            code
            message
          }
          headers
          body
        }
        response {
          httpStatus
          headers
          body
          timeToFirstByteMilliseconds
        }
        createdAt
      }
    }
  }
`;
