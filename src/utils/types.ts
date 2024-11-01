type GqlErrorCode =
  | 'UNAUTHENTICATED'
  | 'FORBIDDEN'
  | 'BAD_USER_INPUT'
  | 'INTERNAL_SERVER_ERROR'
  | 'NOT_FOUND'
  | 'TOO_MANY_REQUESTS'
  | 'BAD_GATEWAY'
  | 'GATEWAY_TIMEOUT'
  | 'SERVICE_UNAVAILABLE'
  | 'UNKNOWN_ERROR';

export type GqlError = {
  message: string;
  locations: {
    line: number;
    column: number;
  }[];
  path: string[];
  extensions: {
    code: GqlErrorCode;
  };
  source?: string;
};
