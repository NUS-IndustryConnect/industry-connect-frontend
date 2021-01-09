import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonLink({ to, className, label }) {
  return (
    <Link to={to}>
      <button className={className}>{label}</button>
    </Link>
  )
}