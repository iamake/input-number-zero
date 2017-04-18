import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/App/AppContainer';


const MOUNT_NODE = document.getElementById('root');

function render() {
  ReactDOM.render(
    <AppContainer />,
    MOUNT_NODE,
  );
}

render();
