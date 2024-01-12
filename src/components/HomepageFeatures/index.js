import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Seshat On-chain Data Layer',
    Svg: require('@site/static/img/blockchain.svg').default,
    description: (
      <>
        Connecting to various chains, providing the Seshat data wearhouse with the raw on-chain data coupeled with required transformations from DBTE module.
      </>
    ),
  },
  {
    title: 'Seshat Model Layer',
    Svg: require('@site/static/img/ads.svg').default,
    description: (
      <>
        Creating and training the models off-chain and simply pushing the models to the Seshat model hub.
      </>
    ),
  },
  {
    title: 'Seshat Real-time Inference Engine',
    Svg: require('@site/static/img/ranking.svg').default,
    description: (
      <>
        Accessing the real-time on-chain data to run the model on Inference Engine (IE) and providing results.
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
