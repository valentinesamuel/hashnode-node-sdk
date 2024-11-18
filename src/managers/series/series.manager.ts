import { BaseManager } from '../base.manager';
import type { HashnodeSDKClient } from '../../client';

/**
 * Manages series-related operations.
 *
 * @extends BaseManager
 */
export class SeriesManager extends BaseManager {
  /**
   * Creates an instance of SeriesManager.
   *
   * @param client - The Hashnode SDK client.
   */
  constructor(client: HashnodeSDKClient) {
    super(client, 'SeriesManager');
  }
}
