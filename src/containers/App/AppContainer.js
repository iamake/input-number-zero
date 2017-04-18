import { compose, withState } from 'recompose';

import { App } from './App';

export default compose(
  withState('number', 'setNumber', ''),
)(App);
