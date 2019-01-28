import React, { Component } from "react";
import Table from "./table";
import { Sticky } from "semantic-ui-react";

export default class SocialContent extends Component {
  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const { contextRef } = this.state;
    const { view, statistics, serviceKey, requestStatistics } = this.props;
    return (
      <section className={"content"} ref={this.handleContextRef}>
        <main>
          <Table
            view={view}
            data={statistics}
            serviceKey={serviceKey}
            requestStatistics={requestStatistics}
          />
        </main>
        <aside>
          <Sticky context={contextRef}>ASIDE</Sticky>
        </aside>
      </section>
    );
  }
}
