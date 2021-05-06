import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ButtonLink(props) {
  const history = useHistory();
  const { to, label } = props;
  return <button {...props} onClick={() => history.push(to)}>{label}</button>
}
