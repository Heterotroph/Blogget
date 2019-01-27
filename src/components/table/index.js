import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'
import TableItem from './TableItem';

class AccTable extends Component {
  render() {
    const { requestStatistics } = this.props;
    if (!this.props.data) return <button onClick={() => requestStatistics('youtube', {page: 1})}>error</button>
    const { results } = this.props.data;
    const body = results.map(item => <TableItem key={item.id} {...item} />);
    return (
      <Table basic='very' celled  >

        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>videos</Table.HeaderCell>
            <Table.HeaderCell>per month</Table.HeaderCell>
            <Table.HeaderCell>subscribers</Table.HeaderCell>
            <Table.HeaderCell>per month</Table.HeaderCell>
            <Table.HeaderCell>subscribers</Table.HeaderCell>
            <Table.HeaderCell>per month</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {body}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='7'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' disabled icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a' disabled>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default AccTable;