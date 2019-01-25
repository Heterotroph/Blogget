import React, { Component } from 'react';
import { Table, Label, Segment } from 'semantic-ui-react'
import Badge from './Badge';

export default class TableItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell><Badge /></Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>15</Table.Cell>
        <Table.Cell>15</Table.Cell>
        <Table.Cell>
          10
          <Label color='red' size='mini' horizontal>
          +10%
          </Label>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
    );
  }
}