import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '词库管理',
    Svg: require('@site/static/img/aws20-adfg6.svg').default,
    description: (
      <>
        仅需在聊天下发送一些文字，就可以轻松的对收集到的词库进行管理
      </>
    ),
  },
  {
    title: '实时语音克隆',
    Svg: require('@site/static/img/a8j86-2yktt.svg').default,
    description: (
      <>
        搭载了Mocking Bird 实时语音克隆模块，无需部署，即可使用。
      </>
    ),
  },
  {
    title: '后劲十足',
    Svg: require('@site/static/img/afplz-342pw.svg').default,
    description: (
      <>
        余味无穷_______________________
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
