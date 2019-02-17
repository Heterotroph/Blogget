import React, { Component } from "react";
import { connect } from "react-redux";

import {
  requestStatisticsAction,
  requestSpecialAction
} from "../actions/SocialActions";

import { changeAsideModeAction } from "../actions/ViewActions";

import Header from "../components/Header";
import SocialContent from "../components/SocialContent";

import "../styles/App.css";
import "../styles/Components.css";

class App extends Component {
  componentDidMount() {
    const { social, requestStatistics, requestSpecial } = this.props;
    const { serviceKey } = social;
    requestStatistics(serviceKey, { page: 1 });
    //requestSpecial(serviceKey);
  }
  render() {
    const { social, view, requestStatistics, changeAsideMode } = this.props;
    const { serviceKey } = social;
    const isLoading = Boolean(social.statistics);
    return (
      <div className="App">
        <Header serviceKey={serviceKey} isLoading={isLoading} />
        {isLoading && (
          <SocialContent
            view={view}
            serviceKey={serviceKey}
            statistics={social.statistics}
            changeAsideMode={changeAsideMode}
            requestStatistics={requestStatistics}
          />
        )}
        <footer>Zygin, Akhtyamov</footer>
      </div>
    );
  }
}

const mapStateToProps = store => ({ social: store.social, view: store.view });

const mapDispatchToProps = dispatch => ({
  // -----------------
  requestStatistics: (serviceKey, extra) =>
    dispatch(requestStatisticsAction(serviceKey, extra)),
  requestSpecial: serviceKey => dispatch(requestSpecialAction(serviceKey)),
  // -----------------
  changeAsideMode: (mode, extra) => dispatch(changeAsideModeAction(mode, extra))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
