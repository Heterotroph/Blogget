import React from 'react';
import { Header, Image } from 'semantic-ui-react'

const Badge = props => {
  const {picture, title, categories} = props;
  return (
    <Header as='h4' image>
      <Image src='https://yt3.ggpht.com/a-/AAuE7mBlVCRJawuU4QYf21y-Fx-cc8c9HhExSiAPtQ=s240-mo-c-c0xffffffff-rj-k-no' rounded size='mini' />
      <Header.Content>
        T-Series
        <Header.Subheader>Music, Music_of_Asia</Header.Subheader>
      </Header.Content>
    </Header>
  )
}

export default Badge;