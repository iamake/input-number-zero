import React from 'react';

export function App({ number, setNumber }) {
  return (
    <div>
      <form>
        <input ref="inputNumber"
               type="number"
               value={number}
               onChange={e => setNumber(e.target.value)} />
        <button ref="buttonReset" onClick={e => {
          e.preventDefault();
          setNumber('');
        }}>
          RESET
        </button>
      </form>
      <ol>
        <li>Enter non zero and hit RESET</li>
        <li>Enter zero and hit RESET</li>
      </ol>
    </div>
  )
}
