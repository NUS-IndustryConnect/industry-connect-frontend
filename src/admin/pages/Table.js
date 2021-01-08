import React from 'react';

export default function Table({ headers, data = [], dataToRow, className }) {
  return data.length === 0
  ? <p>No items.</p>
  : (
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