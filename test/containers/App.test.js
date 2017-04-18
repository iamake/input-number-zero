import React from 'react'
import ReactDOM from 'react-dom'
import { describe } from 'mocha';
import { expect } from 'chai';
import {
  renderIntoDocument,
  Simulate,
} from 'react-dom/test-utils';

import AppContainer from '../../src/containers/App/AppContainer'

describe('application logic', () => {
  it('should correctly reset if was previously set to 1', () => {
    const app = renderIntoDocument(
      <AppContainer />
    );
    const inputNumber = ReactDOM.findDOMNode(app.refs.inputNumber);
    const buttonReset = ReactDOM.findDOMNode(app.refs.buttonReset);

    inputNumber.value = '1';
    Simulate.change(inputNumber);
    expect(inputNumber.value).to.equal('1');

    Simulate.click(buttonReset);
    expect(inputNumber.value).to.equal('');
  });

  it('should correctly reset if was previously set to 0', () => {
    const app = renderIntoDocument(
      <AppContainer />
    );
    const inputNumber = ReactDOM.findDOMNode(app.refs.inputNumber);
    const buttonReset = ReactDOM.findDOMNode(app.refs.buttonReset);

    inputNumber.value = '0';
    Simulate.change(inputNumber);
    expect(inputNumber.value).to.equal('0');

    Simulate.click(buttonReset);
    expect(inputNumber.value).to.equal('');
  });
});