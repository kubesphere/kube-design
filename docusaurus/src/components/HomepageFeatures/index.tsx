import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '50+ Production-Ready Components',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A comprehensive React component library with 50+ components, built and battle-tested
        in KubeSphere Console. From basic UI elements to complex data visualizations.
      </>
    ),
  },
  {
    title: 'Built for Cloud Native',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Designed specifically for Kubernetes and cloud-native applications.
        Features components like <code>Log Viewer</code>, <code>Code Editor</code>,
        and <code>Diff Viewer</code> tailored for DevOps workflows.
      </>
    ),
  },
  {
    title: 'TypeScript & Accessibility First',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Full TypeScript support with comprehensive type definitions.
        Built with accessibility in mind, following WAI-ARIA guidelines
        to ensure your applications work for everyone.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
