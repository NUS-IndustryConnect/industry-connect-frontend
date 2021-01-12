import React from 'react';

import './index.css';

export default function VerticalTable({ data }) {
  return (
    <table className="vertical">
      <tbody>
        { data.map(({ header, data }, index) => (
          <tr key={index}>
            <th>{header}</th>
            <td>{data}</td>
          </tr>
        )) }
      </tbody>
    </table>
  )
}