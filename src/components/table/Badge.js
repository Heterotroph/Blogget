import React from "react";
import { Header, Image, Label } from "semantic-ui-react";

const Badge = props => {
  const { picture, title, categories, country } = props;
  const totalCategories = categories.map(item => item.name).join(", ");
  return (
    <Header as="h4" image>  
      <Image src={picture} className='badge-img' rounded size="tiny" />
      <Header.Content>
        <em className="nowrap-ellipsis badge-title">{title}</em>
        <Label size="mini" as="a">
          {country || "OTHER"}
        </Label>
        <Header.Subheader className="nowrap-ellipsis badge-categories">
          {totalCategories}
        </Header.Subheader>
      </Header.Content>
    </Header>
  );
};

export default Badge;
