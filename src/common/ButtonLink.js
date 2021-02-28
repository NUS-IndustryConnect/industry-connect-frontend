import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonLink(props) {
  const { to, className, label } = props;
  return (
    <Link to={to} {...props}>
      <button className={className}>{label}</button>
    </Link>
  )
}
