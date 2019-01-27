import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import TableItem from "./TableItem";
import Pagination from "./Pagination";

class AccTable extends Component {
  render() {
    const { results, next, previous, count } = this.props.data;
    const currentPage = this.getCurrentPage(
      previous,
      next,
      count,
      results.length
    );
    const body = results.map(item => <TableItem key={item.id} {...item} />);
    return (
      <Table basic="very" celled>
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="7">
            <Pagination
              first={1}
              current={currentPage}
              last={Math.ceil(count / results.length)}
              onPageChanged={this.onPageChanged.bind(this)}
            />
          </Table.HeaderCell>
        </Table.Row>
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

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Pagination
                first={1}
                current={currentPage}
                last={Math.ceil(count / results.length)}
                onPageChanged={this.onPageChanged.bind(this)}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
  onPageChanged(page) {
    const { requestStatistics, serviceKey } = this.props;
    requestStatistics(serviceKey, { page: page });
  }
  getCurrentPage(prev, next, count, length) {
    if (!prev) {
      return 1;
    } else if (!next) {
      return Math.ceil(count / length);
    } else {
      return Math.max(new URL(next).searchParams.get("page") - 1, 1);
    }
  }
}

export default AccTable;
