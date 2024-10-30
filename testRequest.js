import { HashnodeSDKClient } from './dist/index.js';

const client = new HashnodeSDKClient({
  apiKey: 'YOUR_API_KEY',
});

const user = await client.userManager.getUser('engineeringval');
console.log(user);
