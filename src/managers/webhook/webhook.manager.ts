import { BaseManager } from '../base.manager';
import type { HashnodeSDKClient } from '../../client';
import type {
  CreateWebhookInput,
  CreateWebhookPayload,
  DeleteWebhookPayload,
  ResendWebhookRequestInput,
  ResendWebhookRequestPayload,
  TriggerWebhookTestInput,
  TriggerWebhookTestPayload,
  UpdateWebhookInput,
  UpdateWebhookPayload,
} from '../../generated/gqlQueryTypes';
import {
  CREATE_WEBHOOK_MUTATION,
  DELETE_WEBHOOK_MUTATION,
  RESEND_WEBHOOK_TEST_MUTATION,
  TRIGGER_WEBHOOK_TEST_MUTATION,
  UPDATE_WEBHOOK_MUTATION,
} from './webhook.mutations';

/**
 * Manages webhook-related operations.
 *
 * @extends BaseManager
 */
export class WebhookManager extends BaseManager {
  /**
   * Creates an instance of WebhookManager.
   *
   * @param client - The Hashnode SDK client.
   */
  constructor(client: HashnodeSDKClient) {
    super(client, 'WebhookManager');
  }

  // =======================MUTATIONS=======================

  /**
   * Create Webhook
   *
   * @param input - The CreateWebhookInput.
   *
   * @returns The created webhook.
   */
  async createWebhook(input: CreateWebhookInput) {
    const res = await this.makeRequest<{
      createdWebhook: CreateWebhookPayload;
    }>('createWebhook', CREATE_WEBHOOK_MUTATION, { input });
    return res.createdWebhook.webhook;
  }

  /**
   * Update webhook
   *
   * @param input - The UpdateWebhookInput.
   *
   * @returns The updated webhook.
   */
  async updateWebhook(input: UpdateWebhookInput) {
    const res = await this.makeRequest<{
      updatedWebhook: UpdateWebhookPayload;
    }>('updateWebhook', UPDATE_WEBHOOK_MUTATION, { input });
    return res.updatedWebhook.webhook;
  }

  /**
   * Delete Webhook
   *
   * @param input - The id of the webhook.
   *
   * @returns The deleted webhook.
   */
  async deleteWebhook(id: string) {
    const res = await this.makeRequest<{
      deletedWebhook: DeleteWebhookPayload;
    }>('deleteWebhook', DELETE_WEBHOOK_MUTATION, { id });
    return res.deletedWebhook.webhook;
  }

  /**
   * Trigger webhook test
   *
   * @param input - The triggerWebhookTestInput.
   *
   * @returns The webhook.
   */
  async triggerWebhookTest(input: TriggerWebhookTestInput) {
    const res = await this.makeRequest<{
      triggerWebhookTest: TriggerWebhookTestPayload;
    }>('triggerWebhookTest', TRIGGER_WEBHOOK_TEST_MUTATION, { input });
    return res.triggerWebhookTest.webhook;
  }

  /**
   * Resend webhook test
   *
   * @param input - The resendWebhookTestInput.
   *
   * @returns The webhook message
   */
  async resendWebhookTest(input: ResendWebhookRequestInput) {
    const res = await this.makeRequest<{
      resendWebhook: ResendWebhookRequestPayload;
    }>('resendWebhookTest', RESEND_WEBHOOK_TEST_MUTATION, { input });
    return res.resendWebhook.webhookMessage;
  }
}
