import React from 'react'
import { Statistic } from 'semantic-ui-react'

const items = [
  { key: 'views', label: 'Views', value: '22' },
  { key: 'subs', label: 'Subscribers', value: '31,200' },
  { key: 'videos', label: 'Videos', value: '22' },
]

const CardStatisticsGroup = props => {
    items[0] = props.views;
    items[1] = props.subscribers;
    items[2] = props.videos;
    return (<Statistic.Group items={items} />);
}

export default CardStatisticsGroup