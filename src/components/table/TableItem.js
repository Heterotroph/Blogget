import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import Badge from './Badge';
import { format } from '../../utils';

export default class TableItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {videos, views, subscribers, onClick} = this.props;
    return (
      <Table.Row>
        <Table.Cell onClick={e => {onClick('card', this.props)}}>
          <Badge {...this.props}/>
        </Table.Cell>
        <Table.Cell textAlign='right'>{format(views)}</Table.Cell>
        <Table.Cell textAlign='right'>+100500</Table.Cell>
        <Table.Cell textAlign='right'>{format(subscribers)}</Table.Cell>
        <Table.Cell textAlign='right'>+0</Table.Cell>
        <Table.Cell textAlign='right'>{format(videos)}</Table.Cell>
        <Table.Cell textAlign='right'>+0</Table.Cell>
      </Table.Row>
    );
  }
}