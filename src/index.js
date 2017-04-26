import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App/App';


const MOUNT_NODE = document.getElementById('root');

function render() {
  ReactDOM.render(
    <App />,
    MOUNT_NODE,
  );
}

render();
