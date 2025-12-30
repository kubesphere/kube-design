import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.features.productionReady.title">50+ Production-Ready Components</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate
        id="homepage.features.productionReady.description"
        description="Description for production-ready components feature">
        A comprehensive React component library with 50+ components, built and battle-tested
        in KubeSphere Console. From basic UI elements to complex data visualizations.
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.features.cloudNative.title">Built for Cloud Native</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate
        id="homepage.features.cloudNative.description"
        description="Description for cloud native feature"
        values={{
          logViewer: <code>Log Viewer</code>,
          codeEditor: <code>Code Editor</code>,
          diffViewer: <code>Diff Viewer</code>,
        }}>
        {'Designed specifically for Kubernetes and cloud-native applications. Features components like {logViewer}, {codeEditor}, and {diffViewer} tailored for DevOps workflows.'}
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.features.typescript.title">TypeScript & Accessibility First</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate
        id="homepage.features.typescript.description"
        description="Description for TypeScript and accessibility feature">
        Full TypeScript support with comprehensive type definitions.
        Built with accessibility in mind, following WAI-ARIA guidelines
        to ensure your applications work for everyone.
      </Translate>
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
