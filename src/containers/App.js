import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
  requestStatisticsAction,
  requestSpecialAction
} from '../actions/SocialActions';

import Header from '../components/Header';
import SocialContent from '../components/SocialContent';

class App extends Component {
  render() {
    const { social, requestStatistics, requestSpecial } = this.props;
    const { serviceKey } = social;
    return (
      <div className='App'>
        <Header serviceKey={serviceKey} />
        <SocialContent data={social.statistics} requestStatistics={requestStatistics} />
        <aside>aside</aside>
        <footer>footer</footer>
      </div>
    );
  }
}

const mapStateToProps = store => ({ social: store.social });

const mapDispatchToProps = dispatch => ({
  requestStatistics: (serviceKey, extra) => dispatch(requestStatisticsAction(serviceKey, extra)),
  requestSpecial: serviceKey => dispatch(requestSpecialAction(serviceKey))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)