import { BaseManager } from '../base.manager';
import type { HashnodeSDKClient } from '../../client';
import type {
  CreateSeriesInput,
  CreateSeriesPayload,
  RemoveSeriesInput,
  RemoveSeriesPayload,
  UpdateSeriesInput,
  UpdateSeriesPayload,
} from '../../generated/gqlQueryTypes';
import {
  CREATE_SERIES_MUTATION,
  REMOVE_SERIES_MUTATION,
  UPDATE_SERIES_MUTATION,
} from './series.mutations';

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

  // =======================MUTATIONS=======================

  /**
   * Create Series
   *
   * @param input - The CreateSeriesInput.
   *
   * @returns The created series.
   */
  async createSeries(input: CreateSeriesInput) {
    const res = await this.makeRequest<{ createdSeries: CreateSeriesPayload }>(
      'createSeries',
      CREATE_SERIES_MUTATION,
      { input },
    );
    return res.createdSeries.series;
  }

  /**
   * Update series
   *
   * @param input - The UpdateSeriesInput.
   *
   * @returns The updated series.
   */
  async updateSeries(input: UpdateSeriesInput) {
    const res = await this.makeRequest<{ updatedSeries: UpdateSeriesPayload }>(
      'updateSeries',
      UPDATE_SERIES_MUTATION,
      { input },
    );
    return res.updatedSeries.series;
  }

  /**
   * Remove Series
   *
   * @param input - The RemoveSeriesInput.
   *
   * @returns The removed series.
   */
  async removeSeries(input: RemoveSeriesInput) {
    const res = await this.makeRequest<{ removedSeries: RemoveSeriesPayload }>(
      'removeSeries',
      REMOVE_SERIES_MUTATION,
      { input },
    );
    return res.removedSeries.series;
  }
}
