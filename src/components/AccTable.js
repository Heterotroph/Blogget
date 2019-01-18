import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import TableItem from './TableItem';

class AccTable extends Component {
  render() {
    return (
      <Table basic='very' celled collapsing>
        
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>videos</Table.HeaderCell>
            <Table.HeaderCell>per month</Table.HeaderCell>
            <Table.HeaderCell>subscribers</Table.HeaderCell>
            <Table.HeaderCell>per month</Table.HeaderCell>
            <Table.HeaderCell>subscribers</Table.HeaderCell>
            <Table.HeaderCell>per month</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <TableItem />
          <TableItem />
        </Table.Body>
      </Table>
    );
  }
}

export default AccTable;