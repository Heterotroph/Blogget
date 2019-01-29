import React, { Component } from "react";
import Table from "./table";
import { Sticky, Segment } from "semantic-ui-react";
import Card from "./Card";

export default class SocialContent extends Component {
  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const { contextRef } = this.state;
    const {
      view,
      statistics,
      serviceKey,
      changeAsideMode,
      requestStatistics
    } = this.props;
    console.log('view.aside')
    console.log(view.aside)
    return (
      <div className={"flex-row-center"} ref={this.handleContextRef}>
        <main>
          <Table
            view={view}
            data={statistics}
            serviceKey={serviceKey}
            changeAsideMode={changeAsideMode}
            requestStatistics={requestStatistics}
          />
        </main>
        <aside>
          <Sticky offset={10} context={contextRef} style={{ margin: "11px 22px" }}>
            {view.aside.mode == "card" && <Card {...view.aside.extra} />}
          </Sticky>
        </aside>
      </div>
    );
  }
}
