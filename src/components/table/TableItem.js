import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import Badge from "./Badge";
import { format } from "../../utils";

export default class TableItem extends Component {
  render() {
    const {
      onClick,
      active,
      accSize,
      othSize,
      views,
      views_delta_week,
      views_delta_month,
      subscribers,
      subscribers_delta_week,
      subscribers_delta_month,
      videos,
      videos_delta_week,
      videos_delta_month,
    } = this.props;
    return (
      <Table.Row className='table-item' onClick={e => {onClick('card', this.props)}} active={active}>
        <Table.Cell width={accSize} textAlign='left'><Badge {...this.props}/></Table.Cell>
        <Table.Cell width={othSize} textAlign='right'>{format(views)}</Table.Cell>
        <Table.Cell width={othSize} textAlign='right'>{this.emFormat(views_delta_month)}</Table.Cell>
        <Table.Cell width={othSize} textAlign='right'>{format(subscribers)}</Table.Cell>
        <Table.Cell width={othSize} textAlign='right'>{this.emFormat(subscribers_delta_month)}</Table.Cell>
        <Table.Cell width={othSize} textAlign='right'>{format(videos)}</Table.Cell>
        <Table.Cell width={othSize} textAlign='right'>{this.emFormat(videos_delta_month)}</Table.Cell>
      </Table.Row>
    );
  }
  emFormat(value) {
    let f = format(value);
    f = value > 0 ? "+" + f : f;
    const className = value > 0 ? "positive" : "negative";
    return <em className={className}>{f}</em>;
  }
}
