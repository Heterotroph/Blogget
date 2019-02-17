import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import Badge from './Badge';
import { format } from '../../utils';

export default class TableItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell onClick={e => {this.props.onClick('card', this.props)}}>  
          <Badge {...this.props}/>
        </Table.Cell>
        <Table.Cell textAlign='right'>{format(this.props.views)}</Table.Cell>
        <Table.Cell textAlign='right'>{format(this.props.views_delta_month)}</Table.Cell>
        <Table.Cell textAlign='right'>{format(this.props.subscribers)}</Table.Cell>
        <Table.Cell textAlign='right'>{format(this.props.subscribers_delta_month)}</Table.Cell>
        <Table.Cell textAlign='right'>{format(this.props.videos)}</Table.Cell>
        <Table.Cell textAlign='right'>{format(this.props.videos_delta_month)}</Table.Cell>
      </Table.Row>
    );
  }
}