import React from 'react';
import Table from './table';

const SocialContent = props =>
    <section>
        <main>
            <Table
              data={props.statistics}
              serviceKey={props.serviceKey}
              requestStatistics={props.requestStatistics}
            />
        </main>
    </section>

export default SocialContent;