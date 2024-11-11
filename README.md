# Hashnode Node.js SDK

A powerful and flexible Node.js SDK for interacting with the Hashnode GraphQL API. This SDK provides comprehensive access to Hashnode's features including user management, publications, posts, documentation projects, and more.

<div style="padding: 10px; background-color: #cfc42d; color: #000000; border-radius:5px; width:fit-content;">
  <strong>&#9888;</strong> Only <i>queries</i> are supported as at this time. I am currently working on the <i>mutations</i> 🫠🫠.
</div>


## Table of Contents

- [Hashnode Node.js SDK](#hashnode-nodejs-sdk)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
    - [Authentication](#authentication)
    - [Basic Setup](#basic-setup)
    - [Quick Example](#quick-example)
  - [Core Concepts](#core-concepts)
    - [Client Structure](#client-structure)
  - [API Reference](#api-reference)
    - [HashnodeSDKClient](#hashnodesdkclient)
    - [Managers](#managers)
      - [UserManager](#usermanager)
      - [MeManager](#memanager)
      - [PostManager](#postmanager)
      - [PublicationManager](#publicationmanager)
      - [DocumentationProjectManager](#documentationprojectmanager)
      - [DomainAvailabilityManager](#domainavailabilitymanager)
  - [Advanced Topics](#advanced-topics)
    - [Error Handling](#error-handling)
    - [Pagination](#pagination)
    - [TypeScript Support](#typescript-support)
    - [Rate Limiting](#rate-limiting)
    - [Error Handling Strategies](#error-handling-strategies)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
    - [Development Setup](#development-setup)
    - [Code Style](#code-style)
    - [Testing](#testing)
    - [Pull Request Process](#pull-request-process)
  - [Troubleshooting](#troubleshooting)
    - [Common Issues](#common-issues)
    - [Debug Tips](#debug-tips)
    - [Known Limitations](#known-limitations)
  - [Additional Resources](#additional-resources)
    - [API Documentation](#api-documentation)
    - [Changelog](#changelog)
    - [License](#license)
    - [Support](#support)

## Installation

Using npm:

```bash
npm install hashnode-node-sdk
```

Using yarn:

```bash
yarn add hashnode-node-sdk
```

## Requirements

- Node.js 14.x or higher
- A Hashnode API key

## Getting Started

### Authentication

```typescript
import { HashnodeSDKClient } from 'hashnode-node-sdk';

const client = new HashnodeSDKClient({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://gql.hashnode.com', // Optional
});
```

### Basic Setup

The SDK provides several managers for different API functionalities:

- UserManager - User operations
- MeManager - Authenticated user operations
- PostManager - Blog post operations
- PublicationManager - Publication management
- DocumentationProjectManager - Documentation management
- DomainAvailabilityManager - Domain checks
- MiscellaneousManager - Utility operations

### Quick Example

```typescript
// Fetch user details
const user = await client.userManager.getUser('username');

// Get authenticated user's posts
const myPosts = await client.meManager.getMyPosts(
  10,
  null,
  {},
  'DATE_PUBLISHED_DESC',
);

// Check domain availability
const isAvailable =
  await client.domainAvailabilityManager.checkSubdomainAvailability('myblog');
```

## Core Concepts

### Client Structure

The SDK is built around the `HashnodeSDKClient` class, which provides access to various managers:

```typescript
const client = new HashnodeSDKClient({
  apiKey: 'YOUR_API_KEY',
});

// Access different managers
client.userManager;
client.meManager;
client.postManager;
client.publicationManager;
client.documentationProjectManager;
client.domainAvailabilityManager;
client.miscManager;
```

I'll continue creating the detailed README.md, focusing on the API Reference section and beyond:

## API Reference

### HashnodeSDKClient

The main client class that provides access to all SDK functionality.

```typescript
const client = new HashnodeSDKClient({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://gql.hashnode.com', // Optional
});
```

### Managers

#### UserManager

Handles user-related operations.

```typescript
// Get user details
const user = await client.userManager.getUser('username');

// Get user followers
const followers = await client.userManager.getUserFollowers('username', 1, 10);

// Get user's tech stack
const techStack = await client.userManager.getUserTechStack('username', 1, 10);
```

#### MeManager

Handles authenticated user operations.

```typescript
// Get authenticated user details
const me = await client.meManager.getMe();

// Get email preferences
const preferences = await client.meManager.getMyEmailNotificationPreferences();

// Get personal posts
const myPosts = await client.meManager.getMyPosts(10, null, {});
```

#### PostManager

Handles blog post operations.

```typescript
// Get post by ID
const post = await client.postManager.getPost('postId');

// Get post comments
const comments = await client.postManager.getPostComments(
  'postId',
  10,
  null,
  'RECENT',
);

// Get post likers
const likers = await client.postManager.getPostLikers('postId', 10, null, {});
```

#### PublicationManager

Handles publication operations.

```typescript
// Get publication details
const publication = await client.publicationManager.getPublication('pubId');

// Get publication posts
const posts = await client.publicationManager.getPublicationPostsViaPage(
  'pubId',
  'host',
  10,
  null,
  {},
);
```

#### DocumentationProjectManager

Handles documentation project operations.

```typescript
// Get project details
const project =
  await client.documentationProjectManager.getDocumentationProject(
    'projectId',
    'host',
  );

// Get project guides
const guides =
  await client.documentationProjectManager.getDocumentationProjectGuides(
    'projectId',
  );
```

#### DomainAvailabilityManager

Handles domain availability checks.

```typescript
// Check subdomain availability
const isAvailable =
  await client.domainAvailabilityManager.checkSubdomainAvailability('myblog');

// Check custom domain
const isDomainAvailable =
  await client.domainAvailabilityManager.checkCustomDomainAvailability({
    domain: 'example.com',
  });
```

## Advanced Topics

### Error Handling

The SDK provides comprehensive error handling:

```typescript
try {
  const user = await client.userManager.getUser('username');
} catch (error) {
  if (error.code === 'UNAUTHENTICATED') {
    // Handle authentication error
  } else if (error.code === 'NOT_FOUND') {
    // Handle not found error
  }
}
```

### Pagination

Most list operations support cursor-based pagination:

```typescript
const posts = await client.postManager.getPostComments(
  'postId',
  10, // first: number of items
  null, // after: cursor for next page
  'RECENT', // Sort order
);
```

### TypeScript Support

The SDK is built with TypeScript and provides comprehensive type definitions:

```typescript
// Complete type definitions for:
- Client configuration
- API responses
- Manager methods
- Error types
- Pagination parameters
```

### Rate Limiting

The SDK respects Hashnode's API rate limits. Query users are allowed to send up to 20k requests per minute. While Mutations users can send up to 500 requests per per minute.

- Error Code: `TOO_MANY_REQUESTS`
- Handling:
  ```typescript
  try {
    await client.userManager.getUser('username');
  } catch (error) {
    if (error.extensions?.code === 'TOO_MANY_REQUESTS') {
      // Handle rate limiting
    }
  }
  ```

### Error Handling Strategies

The SDK provides structured error handling:

```typescript
// Error types available
type GqlErrorCode =
  | 'UNAUTHENTICATED'
  | 'FORBIDDEN'
  | 'BAD_USER_INPUT'
  | 'INTERNAL_SERVER_ERROR'
  | 'NOT_FOUND'
  | 'TOO_MANY_REQUESTS';

// Error handling example
try {
  const result = await client.meManager.getMe();
} catch (error) {
  switch (error.extensions?.code) {
    case 'UNAUTHENTICATED':
      // Handle authentication error
      break;
    case 'NOT_FOUND':
      // Handle not found error
      break;
    default:
    // Handle other errors
  }
}
```

## Roadmap
I am actively working on mutations
  - [X] Queries
  - [X] Error Types
  - [X] Manager Adapter
  - [ ] Mutations
 
## Contributing

### Development Setup

1. Clone the repository:

```bash
git clone https://github.com/valentinesamuel/hashnode-node-sdk.git
cd hashnode-node-sdk
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

### Code Style

- Uses Prettier
- TypeScript strict mode enabled
- Follow existing code patterns
- Document all methods with JSDoc comments

### Testing

Run tests using:

```bash
npm test        # Run all tests
npm run test:watch  # Run tests in watch mode
```

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Add tests
5. Update documentation
6. Submit PR with detailed description

## Troubleshooting

### Common Issues

1. Authentication Errors

```typescript
// Ensure API key is set correctly
const client = new HashnodeSDKClient({
  apiKey: 'YOUR_API_KEY', // Check API key is valid
});
```

2. Rate Limiting

- Implement exponential backoff
- Cache frequently accessed data
- Monitor request limits

3. Network Issues

- Check API endpoint accessibility
- Verify network connectivity
- Review firewall settings

### Debug Tips

1. Enable debug logging:

```typescript
const client = new HashnodeSDKClient({
  apiKey: 'YOUR_API_KEY',
  // debug: true // Enable detailed logging
});
```

2. Check response data:

```typescript
try {
  const result = await client.userManager.getUser('username');
  console.log('Response:', JSON.stringify(result, null, 2));
} catch (error) {
  console.error('Error details:', error);
}
```

### Known Limitations

<!-- - Maximum pagination limit: 100 items per request
- File upload size restrictions -->

- Rate limiting constraints
- API endpoint-specific limitations

## Additional Resources

### API Documentation

- [Full API Documentation](https://apidocs.hashnode.com)
- [GraphQL Schema](https://gql.hashnode.com)

### Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and updates.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Support

- [GitHub Issues](https://github.com/valentinesamuel/hashnode-node-sdk/issues)
- [Documentation](https://apidocs.hashnode.com)
