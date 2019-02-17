import React from 'react';
import { Table } from 'semantic-ui-react'
import Badge from './Badge';
import { format } from '../../utils';

const TableItem = props => 
  <Table.Row className='table-item' onClick={e => {props.onClick('card', props)}} active={props.active}>
    <Table.Cell><Badge {...props}/></Table.Cell>
    <Table.Cell textAlign='right'>{format(props.views)}</Table.Cell>
    <Table.Cell textAlign='right'>{format(props.views_delta_month)}</Table.Cell>
    <Table.Cell textAlign='right'>{format(props.subscribers)}</Table.Cell>
    <Table.Cell textAlign='right'>{format(props.subscribers_delta_month)}</Table.Cell>
    <Table.Cell textAlign='right'>{format(props.videos)}</Table.Cell>
    <Table.Cell textAlign='right'>{format(props.videos_delta_month)}</Table.Cell>
  </Table.Row>

export default TableItem;