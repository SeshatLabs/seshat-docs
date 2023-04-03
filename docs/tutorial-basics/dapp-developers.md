---
sidebar_position: 2
---

# Publishers & DApp Developers

First, app developers or publishers need to create an account on Seshatlabs.xyz. They can either connect their blockchain wallet or use Login with Google. Then, they should go to their profile to access their API key. Note that there is a cap limit for some endpoints in the free tier.

**Install SDK and Fetch Ads**

To fetch ads, simply install the Seshat SDK with:

`npm install seshat`


Here's a simple example of how to fetch targeted ads using the Seshat SDK:

```javascript
// Import the seshat package
const seshat = require('seshat');

// Set your API key
const apiKey = 'your-api-key';

// Task 1: Fetch advertisement given a user blockchain address
const userAddress = '0x1234567890abcdef1234567890abcdef12345678';
const adResult = await seshat.getAdvertisement(apiKey, userAddress);
console.log(adResult);
```

