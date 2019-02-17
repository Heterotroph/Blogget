import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import CardStatisticsGroup from "./CardStatisticsGroup";

const AccCard = props => {
  const {
    picture,
    title,
    categories,
    description,
    yt_id,
    country,
    views,
    subscribers,
    videos
  } = props;
  const totalCategories = categories.map(item => item.name).join(", ");
  const socialURL = "https://www.youtube.com/channel/" + yt_id;
  const socialURLLabel = "youtube.com/channel/" + yt_id;
  return (
    <Card>
      <Image src={picture} size="massive" />
      <Card.Content>
        <Card.Header>
          {title}
          {"\u00A0"}
          <a target="_blank" href={socialURL}>
            <Icon name="external alternate" link size="small" />
          </a>
        </Card.Header>
        <Card.Meta>{totalCategories}</Card.Meta>

        <Card.Description className="ellipsis">{description}</Card.Description>
      </Card.Content>
      {/*<Card.Content extra>
        <Icon name="user" />
        <Icon name="user" />
        <Icon name="user" />
      </Card.Content>
      <CardStatisticsGroup
        views={views}
        subscribers={subscribers}
        videos={videos}
      />*/}
    </Card>
  );
};

export default AccCard;
