import React, { Component } from 'react';
import { Table, Pagination, Sticky } from 'semantic-ui-react';
import TableItem from './TableItem';

const HARDCODE_LIMIT = 50;

class AccTable extends Component {
  state = {
    isLoading: true
  };
  componentWillReceiveProps(props) {}
  render() {
    const { data, view } = this.props;
    const { results, count } = data;
    const totalPages = Math.ceil(count / HARDCODE_LIMIT);
    const body = results.map(item => <TableItem key={item.id} {...item} />);
    const pagination = (
      <Pagination
        activePage={view.page}
        totalPages={totalPages}
        firstItem={null}
        lastItem={null}
        size='mini'
        onPageChange={this.onPageChange.bind(this)}
      />
    );
    return (
      <React.Fragment>
        <p>{view.page + '->' + view.pageRequested}</p>
        <div>
          <Sticky>{pagination}</Sticky>
          <Table basic='very' celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>videos</Table.HeaderCell>
                <Table.HeaderCell>per month</Table.HeaderCell>
                <Table.HeaderCell>views</Table.HeaderCell>
                <Table.HeaderCell>per month</Table.HeaderCell>
                <Table.HeaderCell>subscribers</Table.HeaderCell>
                <Table.HeaderCell>per month</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{body}</Table.Body>
          </Table>
        </div>
      </React.Fragment>
    );
  }
  onPageChange(e, { activePage }) {
    const { requestStatistics, serviceKey } = this.props;
    requestStatistics(serviceKey, { page: activePage });
  }
}

export default AccTable;
