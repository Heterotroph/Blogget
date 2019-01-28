import React from 'react';
import { Header, Image } from 'semantic-ui-react'

const Badge = props => {
  const {picture, title, categories} = props;
  const totalCategories = categories.map(item => item.name).join(', ');
  return (
    <Header as='h4' image>
      <Image src={ picture } rounded size='mini' />
      <Header.Content>
        { title }
        <Header.Subheader>{ totalCategories }</Header.Subheader>
      </Header.Content>
    </Header>
  )
}

export default Badge;