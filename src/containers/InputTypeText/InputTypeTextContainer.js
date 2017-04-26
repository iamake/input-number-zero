import { compose, withState } from 'recompose';

import {InputTypeText} from './InputTypeText';


export default compose(
  withState('text', 'setText', ''),
)(InputTypeText);
