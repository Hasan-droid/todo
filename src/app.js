import React from 'react';

import ToDo from './components//todo.js';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import SettingsContext  from './components/context.js';
export default class App extends React.Component {
  render() {
    return (
      <SettingsContext>
      <ToDo />
      </SettingsContext>
    )
  }
}
