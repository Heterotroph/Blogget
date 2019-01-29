import React, { Component } from 'react';
import { Table, Pagination, Sticky, Rail } from 'semantic-ui-react';
import TableItem from './TableItem';

const HARDCODE_LIMIT = 50;

class AccTable extends Component {
  state = {
    isLoading: true
  };
  handleContextRef = contextRef => this.setState({ contextRef });
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
        <div ref={this.handleContextRef}>
          <Sticky offset={10} context={this.state.contextRef} style={{float: 'left', 'margin': '11px 11px'}}>
            {pagination}
          </Sticky>
          <Table basic='very' fixed selectable sortable >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine width={15}/>
                <Table.HeaderCell singleLine width={4} textAlign='right'>views</Table.HeaderCell>
                <Table.HeaderCell singleLine width={4} textAlign='right'>per month</Table.HeaderCell>
                <Table.HeaderCell singleLine width={4} textAlign='right'>subscribers</Table.HeaderCell>
                <Table.HeaderCell singleLine width={4} textAlign='right'>per month</Table.HeaderCell>
                <Table.HeaderCell singleLine width={4} textAlign='right'>videos</Table.HeaderCell>
                <Table.HeaderCell singleLine width={4} textAlign='right'>per month</Table.HeaderCell>
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
