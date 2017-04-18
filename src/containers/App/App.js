import React from 'react';

export function App({ number, setNumber }) {
  return (
    <div>
      <form>
        <input type="number"
               value={number}
               onChange={e => setNumber(e.target.value)} />
        <button onClick={e => {
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
