import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  requestStatisticsAction,
  requestSpecialAction
} from '../actions/SocialActions';

import Header from '../components/Header';
import SocialContent from '../components/SocialContent';

class App extends Component {
  componentDidMount() {
    const { social, requestStatistics, requestSpecial } = this.props;
    const { serviceKey } = social;
    requestStatistics(serviceKey, { page: 1 });
    //requestSpecial(serviceKey);
  }
  render() {
    const { social, requestStatistics, requestSpecial } = this.props;
    const { serviceKey } = social;
    const isLoading = Boolean(social.statistics);
    return (
      <div className='App'>
        <Header serviceKey={serviceKey} isLoading={isLoading} />
        {isLoading && (
          <SocialContent
            view={social.view}
            serviceKey={serviceKey}
            statistics={social.statistics}
            requestStatistics={requestStatistics}
          />
        )}
        <footer>footer</footer>
      </div>
    );
  }
}

const mapStateToProps = store => ({ social: store.social });

const mapDispatchToProps = dispatch => ({
  requestStatistics: (serviceKey, extra) =>
    dispatch(requestStatisticsAction(serviceKey, extra)),
  requestSpecial: serviceKey => dispatch(requestSpecialAction(serviceKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
