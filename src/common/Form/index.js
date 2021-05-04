import React from 'react';
import { useHistory } from 'react-router-dom';

import CompanyUserDropdowns from './CompanyUserDropdowns';
import './index.css';

const convertDateFormat = dateString => {
  // convert a dateString of the format "1/1/2021 12:00:00 AM"
  // to the format YYYY-MM-DD
  // to supply as defaultVault for <input type="date" />
  return dateString
    ? new Date(dateString).toISOString().slice(0, 10)
    : null;
}

const generateComponent = fieldOptions => {
  const { type, name, initial, optional = false, options, disabled = false } = fieldOptions;

  switch (type) {
    case "long-text":
      return (
        <textarea
          id={name} name={name}
          rows="5"
          required={!optional}
          defaultValue={initial}
        >
        </textarea>
      );
    case "dropdown":
      return (
        <select
          name={name} id={name}
          required={!optional} defaultValue={initial} disabled={disabled}
        >
          { options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          )) }
        </select>
      );
    case "checkbox":
      return (
        <input
          type={type} id={name} name={name}
          defaultChecked={initial}
        />
      );
    default:
      return (
        <input
          type={type} id={name} name={name}
          required={!optional}
          defaultValue={type === "date" ? convertDateFormat(initial) : initial}
        />
      );
  }
}

const generateField = (fieldOptions) => {
  const { type, name, label, optional = false, disabled } = fieldOptions;
  const component = generateComponent(fieldOptions);

  if (type === "company-user-dropdowns") {
    return <CompanyUserDropdowns disabled={disabled} />;
  }
  if (type === "checkbox") {
    return (
      <div className="form-field" key={name}>
        { component }
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
  return (
    <div className="form-field" key={name}>
      <label htmlFor={name}><h5>{label}{optional ? " (Optional)": ""}</h5></label>
      { component }
    </div>
  );
}

export default function Form({ fields, submit, submitLabel }) {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    submit(formData);
  }
  const handleCancel = () => {
    history.goBack();
  }

  return (
    <form onSubmit={handleSubmit}>
      { fields.map(generateField) }
      <input type="button" value="Cancel" onClick={handleCancel} className="secondary" />
      <input type="submit" value={submitLabel} className="primary"/>
    </form>
  );
}