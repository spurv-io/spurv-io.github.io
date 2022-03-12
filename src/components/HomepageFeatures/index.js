import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Save',
    Svg: require('@site/static/img/undraw_savings.svg').default,
    description: (
      <>
        Save money by avoiding peak hours and heating when the price is low. Thermal battery.
      </>
    ),
  },
  {
    title: 'Understand',
    Svg: require('@site/static/img/undraw_education.svg').default,
    description: (
      <>
        Data from .. Enhance Understanding of Energy Consumption
      </>
    ),
  },
  {
    title: 'Sustainable Future',
    Svg: require('@site/static/img/undraw_wind_turbine.svg').default,
    description: (
      <>
        Smooth peak energy demand and reduce the carbon footprint. Helps enable the use of intermittent renewable energy sources. 
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
