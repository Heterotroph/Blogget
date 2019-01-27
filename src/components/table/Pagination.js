import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const Pagination = props => {
  const { first, current, last, onPageChanged } = props;
  return (
    <Menu floated="right" pagination>
      <Menu.Item
        as="a"
        disabled={first == current}
        onClick={() => onPageChanged(current - 1)}
        icon
      >
        <Icon name="chevron left" />
      </Menu.Item>
      <Menu.Item
        as="a"
        disabled={last == current}
        onClick={() => onPageChanged(current + 1)}
        icon
      >
        <Icon name="chevron right" />
      </Menu.Item>
    </Menu>
  );
};

export default Pagination;
