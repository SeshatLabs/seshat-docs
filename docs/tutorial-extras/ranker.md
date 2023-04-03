---
sidebar_position: 2
---

# Ranker

Next, install the Seshat SDK with:

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
