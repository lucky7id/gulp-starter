import React from 'react';
import Team from './Team/team';
import teamApp from './Team/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(teamApp, {});

class App extends React.Component {
  constructor(args) {
    super(args);
  }

  render() {
    return <Team appName={this.props.name} />;
  }
}

React.render(<App name="Sparkcentral" />, document.getElementById('app'))