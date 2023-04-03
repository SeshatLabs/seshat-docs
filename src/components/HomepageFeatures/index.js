import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Chain-agnostic Personalization Engine',
    Svg: require('@site/static/img/blockchain.svg').default,
    description: (
      <>
        Seshat's powerful AI-driven personalization engine works seamlessly across multiple 
        blockchains. Seshat delivers 
        hyper-targeted recommendations, helping you engage users with relevant content and 
        offers in the Web3 ecosystem.
      </>
    ),
  },
  {
    title: 'Web3 Native Advertising Platform',
    Svg: require('@site/static/img/ads.svg').default,
    description: (
      <>
        Effortlessly create and manage targeted ad campaigns for both on-chain and off-chain 
        assets with Seshat's user-friendly advertising platform. Leverage our state-of-the-art 
        recommendation engine to reach the right audience in the decentralized world.
      </>
    ),
  },
  {
    title: 'Content Reranking for Enhanced User Experience',
    Svg: require('@site/static/img/ranking.svg').default,
    description: (
      <>
        Elevate your dApp's user experience with Seshat's easy-to-use SDK, which allows you to 
        rerank items and content based on individual user preferences. By tailoring content to 
        each user's unique interests and on-chain activity, you'll drive higher engagement and 
        satisfaction.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <br></br>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
