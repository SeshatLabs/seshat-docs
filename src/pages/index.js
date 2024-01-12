import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Seshat Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Bring Predictive Features to the Web3 Infrastructure">
      <HomepageHeader />
      {/* <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', paddingBottom: '40px'}}>
        <iframe width="840" height="473" src="https://www.youtube.com/embed/c_Cz_XXO2rM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div> */}

      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', paddingBottom: '40px' }}>
          <img src="./img/main_arch.png" alt="Seshat Base Layer" className="responsive-image"></img>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
