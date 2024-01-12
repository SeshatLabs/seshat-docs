---
sidebar_position: 3
---

# Demo Usage

Here we first demonstrate a general RecSys for any sort of contents to rank a list of items based on users previous transactions, and then provide more detail into a customized RecSys for web3 marketing campaigns/quests to match a list of these campaigns based on user's previous interactions on-chain.

**General Personalization Engine for dApps**

Create API key: DApp developers should first create an account on Seshatlabs.xyz. They can either connect their blockchain wallet or use Login with Google. Then, they should go to their profile to obtain their API key. Remember that there is a cap limit for some endpoints in the free tier.

Ranker: Next, install the Seshat SDK with:

`npm install seshat`

Here's a simple example of how to rerank items based on a user's address to deliver a personalized experience:

```javascript
// Import the seshat package
const seshat = require('seshat');

// Set your API key
const apiKey = 'your-api-key';

// Task 2: Get rerank of a list of items based on user address
const itemList = [
  {title: 'Item 1', description: 'This is the first item'},
  {title: 'Item 2', description: 'This is the second item'},
  {title: 'Item 3', description: 'This is the third item'}
];
const rerankResult = await seshat.getRerank(apiKey, itemList, userAddress);
console.log(rerankResult);
```

By following these steps, you can easily integrate Seshat's Web3 personalization engine into your dApp, providing a customized and targeted experience for your users.


**Personalization Engine for Web3 Marketing**

<iframe width="560" height="315" src="https://www.youtube.com/embed/8tZ1wZ4y_SI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<!-- **Motivation: Why do we need a recommendation engine for Web3?**

To bring more users to the Web3 ecosystem, we need to deliver the same experience they had in Web2. However, as a dApp developer, when we add the "connect wallet" functionality to our product, we only have access to the user's public key. With just a public key and on-chain transactions, there's no way to use traditional Web2 recommendation engines. To deliver a personalized experience similar to what FANG companies offer, we need a new personalization engine that fits our new journey. Enter Seshat! -->

<!-- **How does Seshat work?**

In the generative AI world we live in, it's inevitable to leverage AI technology to solve the Web3 recommendation engine problem. Seshat uses its own generative AI, trained self-supervised on over 20 million contracts and more than 1 billion transactions across various blockchains (Ethereum, Aptos, Cosmos, NEAR, Solana, Axelar, and many more). This allows Seshat to understand the story behind each user interaction across all chains, making it chain-agnostic. Our data adaptors connect to any chain-scans and process real-time user transactions (i.e., user-user or user-contract interactions). This approach not only benefits on-chain asset recommendations but also covers off-chain assets to expand Web3 penetration. With machine understanding of each transaction and the generalizability of new contracts, we can bring all the personalization knowledge we have from the Web2 era. -->

<!-- **Why the name Seshat?**

The name Seshat was chosen in honor of the ancient Egyptian goddess of wisdom, knowledge, and writing. Seshat was known for her ability to bring order and structure to the universe, much like our recommendation engine aims to bring personalized experiences to the blockchain, Web3, and dApps ecosystem. The connection between the name Seshat and our technology lies in the ability to bring order, understanding, and personalization to the vast and complex world of Web3. By leveraging the wisdom of Seshat, we aim to create a seamless, personalized experience for users across the Web3 landscape. -->

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
