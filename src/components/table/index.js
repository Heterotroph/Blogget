import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import TableItem from "./TableItem";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";

const PAGES_HARDCODE_LIMIT = 50;

class AccTable extends Component {
  state = { isLoading: true };
  handleContextRef = contextRef => this.setState({ contextRef });
  render() {
    const { data, view, changeAsideMode } = this.props;
    const { results, count } = data;
    const yt_id = view.aside.extra && view.aside.extra.yt_id;
    const totalPages = Math.ceil(count / PAGES_HARDCODE_LIMIT);
    const body = results.map(item => (
      <TableItem
        accSize={15}
        othSize={4}
        key={item.id}
        onClick={changeAsideMode}
        active={yt_id == item.yt_id}
        {...item}
      />
    ));
    return (
      <React.Fragment>
        {/*<p>{view.page + "->" + view.pageRequested}</p>*/}
        <div ref={this.handleContextRef}>
          <TableHeader
            context={this.state.contextRef}
            accSize={15}
            othSize={4}
          />
          <Table basic="very" fixed selectable sortable>
            <Table.Body>{body}</Table.Body>
          </Table>
          <TableFooter
            activePage={view.page}
            totalPages={totalPages}
            onPageChange={this.onPageChange.bind(this)}
          />
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
