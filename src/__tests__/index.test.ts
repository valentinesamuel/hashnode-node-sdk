import { describe, it, expect } from 'vitest';
import * as HashnodeSDK from '../index';

describe('Hashnode SDK', () => {
  it('should export the SDK', () => {
    expect(HashnodeSDK).toBeDefined();
  });
});
