import React from 'react';
import { Table } from 'semantic-ui-react'

const TableHeaderRow = props =>
    <Table.Row>
        <Table.HeaderCell singleLine width={props.accSize}/>
        <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>views</Table.HeaderCell>
        <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>growth</Table.HeaderCell>
        <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>subs</Table.HeaderCell>
        <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>growth</Table.HeaderCell>
        <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>videos</Table.HeaderCell>
        <Table.HeaderCell singleLine width={props.othSize} textAlign='right'>growth</Table.HeaderCell>
    </Table.Row>

export default TableHeaderRow;