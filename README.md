# hashnode-node-sdk

A javascript sdk for working with hasnode graphql api

This package is stil a work in progress, so i intend to add more features and make it more robust and write a comprehensive documentation.  However, you can still use it to interact with the hashnode graphql api. and if you have any feature request or issue, feel free to open an issue or a pull request.

How to use the code

```javascript
const client = new HashnodeSDKClient({
    apiKey: '2a26946b-d2da-48fa-9dba-a4acb8e97e93',
});

const run = async () => {
  const isDomainAvailable = await client.domainAvailabilityManager.checkSubdomainAvailability("test");
  console.log(user);
};

run();
```