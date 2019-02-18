import React from "react";
import { Pagination } from "semantic-ui-react";

const TableFooter = props => {
  return (
    <div className="table-footer">
      <Pagination
        firstItem={null}
        lastItem={null}
        size="mini"
        {...props}
        onPageChange={props.onPageChange}
      />
    </div>
  );
};

export default TableFooter;
