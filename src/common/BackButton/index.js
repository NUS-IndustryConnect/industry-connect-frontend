import React from "react";
import { useHistory } from "react-router";
import { IoIosArrowBack } from 'react-icons/io';

export default function BackButton() {
  const history = useHistory();

  return (
    <button className="secondary" onClick={history.goBack}>
      <IoIosArrowBack />Back
    </button>
  );
}