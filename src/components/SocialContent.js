import React from 'react';
import Table from './table';
import { Sticky } from 'semantic-ui-react';

const SocialContent = props => (
  <section className={'content'}>
    <main>
      <Table
        view={props.view}
        data={props.statistics}
        serviceKey={props.serviceKey}
        requestStatistics={props.requestStatistics}
      />
    </main>
    <aside><Sticky>aside</Sticky></aside>
  </section>
);

export default SocialContent;
