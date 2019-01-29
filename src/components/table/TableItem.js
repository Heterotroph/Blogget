import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import Badge from './Badge';
import { complexFormat } from '../../utils';

export default class TableItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {videos, views, subscribers, yt_id} = this.props;
    const fViews = complexFormat(views);
    const fSubs = complexFormat(subscribers);
    const fVideos = complexFormat(videos);
    console.log(fVideos)
    return (
      <Table.Row>
        <Table.Cell onClick={e => {console.log(yt_id)}}>
          <Badge {...this.props}/>
        </Table.Cell>
        <Table.Cell textAlign='right'>
          <strong>{fViews.int}</strong>
          {fViews.frac}
          {fViews.abbr}
        </Table.Cell>
        <Table.Cell textAlign='right'>+0</Table.Cell>
        <Table.Cell textAlign='right'>
          <strong>{fSubs.int}</strong>
          {fSubs.frac}
          {fSubs.abbr}
        </Table.Cell>
        <Table.Cell textAlign='right'>+0</Table.Cell>
        <Table.Cell textAlign='right'>
          <strong>{fVideos.int}</strong>
          {fVideos.frac}
          {fVideos.abbr}
        </Table.Cell>
        <Table.Cell textAlign='right'>+0</Table.Cell>
      </Table.Row>
    );
  }
}