import React, { Component } from 'react';
import { Table, Label, Segment } from 'semantic-ui-react'
import Badge from './Badge';

export default class TableItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {videos, views, subscribers} = this.props;
    return (
      <Table.Row>
        <Table.Cell><Badge {...this.props}/></Table.Cell>
        <Table.Cell textAlign='right'>{this.format(videos)}</Table.Cell>
        <Table.Cell textAlign='right'></Table.Cell>
        <Table.Cell textAlign='right'>{this.format(views)}</Table.Cell>
        <Table.Cell textAlign='right'>0</Table.Cell>
        <Table.Cell textAlign='right'>{this.format(subscribers)}</Table.Cell>
        <Table.Cell textAlign='right'>0</Table.Cell>
      </Table.Row>
    );
  }

  format(value) {
    if (value < 10000) return value;
    let current = value;
    let postfix = '';
    while (current > 999) {
      current /= 1000
      postfix += 'k';
    }
    return current.toFixed(current > 100 ? 0 : 1) + postfix;
  }
}