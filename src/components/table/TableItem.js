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
        <Table.Cell><Badge {...this.props}/></Table.Cell>
        <Table.Cell>{this.props.views}</Table.Cell>
        <Table.Cell>{this.props.videos}</Table.Cell>
        <Table.Cell>{this.props.subscribers}</Table.Cell>
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