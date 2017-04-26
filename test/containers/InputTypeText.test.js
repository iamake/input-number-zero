import React from 'react'
import ReactDOM from 'react-dom'
import { describe } from 'mocha';
import { expect } from 'chai';
import {
  renderIntoDocument,
  Simulate,
} from 'react-dom/test-utils';

import InputTypeTextContainer from '../../src/containers/InputTypeText/InputTypeTextContainer';


describe('InputTypeText', () => {
  it('should correctly set to 1 if was previously set to 03', () => {
    const app = renderIntoDocument(
      <InputTypeTextContainer />
    );
    const inputText = ReactDOM.findDOMNode(app.refs.inputText);
    const buttonSetTo1 = ReactDOM.findDOMNode(app.refs.buttonSetTo1);

    inputText.value = '03';
    Simulate.change(inputText);
    expect(inputText.value).to.equal('03');

    Simulate.click(buttonSetTo1);
    expect(inputText.value).to.equal('1');
  });

  it('should correctly set to 1 if was previously set to 01', () => {
    const app = renderIntoDocument(
      <InputTypeTextContainer />
    );
    const inputText = ReactDOM.findDOMNode(app.refs.inputText);
    const buttonSetTo1 = ReactDOM.findDOMNode(app.refs.buttonSetTo1);

    inputText.value = '01';
    Simulate.change(inputText);
    expect(inputText.value).to.equal('01');

    Simulate.click(buttonSetTo1);
    expect(inputText.value).to.equal('1');
  });
});
