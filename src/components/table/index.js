import React, { Component } from "react";
import { Table, Pagination, Sticky } from "semantic-ui-react";
import TableItem from "./TableItem";
import TableHeaderRow from "./TableHeaderRow";

import "./Table.css";

const PAGES_HARDCODE_LIMIT = 50;

class AccTable extends Component {
  state = { isLoading: true };
  handleContextRef = contextRef => this.setState({ contextRef });
  render() {
    const { data, view, changeAsideMode } = this.props;
    const { results, count } = data;
    const totalPages = Math.ceil(count / PAGES_HARDCODE_LIMIT);
    const body = results.map(item => (
      <TableItem
        key={item.id}
        onClick={changeAsideMode}
        {...item}
        active={view.aside.extra.yt_id == item.yt_id}
      />
    ));
    const pagination = (
      <Pagination
        activePage={view.page}
        totalPages={totalPages}
        firstItem={null}
        lastItem={null}
        size="mini"
        onPageChange={this.onPageChange.bind(this)}
      />
    );
    return (
      <React.Fragment>
        {/*<p>{view.page + "->" + view.pageRequested}</p>*/}
        <div ref={this.handleContextRef}>
          <Sticky
            offset={10}
            context={this.state.contextRef}
            style={{ float: "left", margin: "11px 11px" }}
          >
            {pagination}
          </Sticky>
          <Table basic="very" fixed selectable sortable>
            <Table.Header>
              <TableHeaderRow accSize={15} othSize={4} />
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
