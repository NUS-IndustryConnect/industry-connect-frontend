import React from 'react';

<<<<<<< HEAD
export default function Table({ headers, data, dataToRow, className }) {
  return (
=======
export default function Table({ headers, data = [], dataToRow, className }) {
  return data.length === 0
  ? <p>No items.</p>
  : (
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
    <table className={className}>
      <thead>
        <tr>
          { headers.map(h => <th key={h}>{h}</th>) }
        </tr>
      </thead>
      <tbody>
        { data.map(dataToRow) }
      </tbody>
    </table>
  );
}