import React from 'react';


export function InputTypeText({ text, setText }) {
  return (
    <div>
      <form>
        <input ref="inputText"
               type="text"
               value={text}
               onChange={e => setText(e.target.value)} />
        <button ref="buttonSetTo1" onClick={e => {
          e.preventDefault();
          setText(1);
        }}>
          SET 1
        </button>
      </form>
      <ol>
        <li>Enter 03 and hit SET 1</li>
        <li>Enter 01 and hit SET 1</li>
      </ol>
    </div>
  )
}
