import React from 'react';
import { Header, Image } from 'semantic-ui-react'

const Badge = props => {
  const {picture, title, categories} = props;
  return (
    <Header as='h4' image>
      <Image src={ props.picture } rounded size='mini' />
      <Header.Content>
        { props.title }
        <Header.Subheader>Music, Music_of_Asia</Header.Subheader>
      </Header.Content>
    </Header>
  )
}

export default Badge;