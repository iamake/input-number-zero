import { compose, withState } from 'recompose';

import {InputTypeNumber} from './InputTypeNumber';


export default compose(
  withState('number', 'setNumber', ''),
)(InputTypeNumber);
