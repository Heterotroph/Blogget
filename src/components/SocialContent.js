import React from 'react';
import Table from './table';

const SocialContent = props =>
    <section>
        <main>
            <Table data={props.data} requestStatistics={props.requestStatistics} />
        </main>
    </section>

export default SocialContent;