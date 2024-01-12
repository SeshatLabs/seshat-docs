---
sidebar_position: 2
---

# RecSys for Web3 Campaigns

With Seshat base layer, anyone can design a native SSP and DSP for users, dApps as publishers, and marketers on different blockchains. Advertisers or marketers can easily build targeted campaigns to promote both on-chain and off-chain assets. On the other hand, publishers or dApp developers can effortlessly fetch personalized quests based on user public keys by running a RecSys model fed by real time on-chain data all abstracted by Seshat base layer. Let's first dive into the data layer, then going through model layer, and finally an example demo usage for such personalized marketing experience for web3.

### Usage and CLI

<iframe width="560" height="315" src="https://www.youtube.com/embed/8tZ1wZ4y_SI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To create a campaign, marketers first need to create an account on [seshatlabs.xyz](https://seshatlabs.xyz). They can either connect their blockchain wallet or use Login with Google. Next, they should go to [seshatlabs.xyz/campaign](seshatlabs.xyz/campaign) and start building their campaign. It's straightforward - just specify the campaign type (airdrop mode will be added soon), campaign title, and description. Make sure to provide as much detail as possible in the description, as it helps our Web3 recommender target the best user addresses for your ads. Take your time to explain your campaign, user persona, and any relevant information. Finally, set your budget and campaign timeline. That's it! We'll handle the personalization for you.

Additionally, you can view and manage your previous and ongoing campaigns, update settings, pause them, or even cancel and delete them.


Then, dapp developers or publishers need to create an account on Seshatlabs.xyz. They can either connect their blockchain wallet or use Login with Google. Then, they should go to their profile to access their API key. Note that there is a cap limit for some endpoints in the free tier.

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

<!-- First, app developers or publishers need to create an account on Seshatlabs.xyz. They can either connect their blockchain wallet or use Login with Google. Then, they should go to their profile to access their API key. Note that there is a cap limit for some endpoints in the free tier.

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
``` -->

