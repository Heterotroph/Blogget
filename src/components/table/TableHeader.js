import React from "react";
import { Table, Sticky } from "semantic-ui-react";

const TableHeader = props => (
  <div style={{ minHeight: 50 }}>
    <Sticky context={props.context} style={{ width: "100%" }}>
      <Table basic="very" fixed unstackable selectable sortable>
        <Table.Header className="table-header">
          <Table.Row>
            <Table.HeaderCell singleLine width={props.accSize}/>
            <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>views</Table.HeaderCell>
            <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>growth</Table.HeaderCell>
            <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>subs</Table.HeaderCell>
            <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>growth</Table.HeaderCell>
            <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>videos</Table.HeaderCell>
            <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>growth</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    </Sticky>
  </div>
);

export default TableHeader;
