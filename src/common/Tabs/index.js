import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Tabs({ tabs }) {
  return (
    <div className="tabs-container">
      <ul>
        { tabs.map(({ name, link }) => (
          <li key={name} className={window.location.pathname === link ? "active" : ""}>
            <Link to={link}>{name}</Link>
          </li>
        )) }
      </ul>
    </div>
  )
}