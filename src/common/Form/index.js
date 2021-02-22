import React from 'react';

import './index.css';

const convertDateFormat = dateString => {
  // convert a dateString of the format "1/1/2021 12:00:00 AM"
  // to the format YYYY-MM-DD
  // to supply as defaultVault for <input type="date" />
  return dateString
    ? new Date(dateString).toISOString().slice(0, 10)
    : null;
}

const generateField = (fieldOptions) => {
  const {
    type,
    name,
    label,
    initial,
    optional = false,
    options
  } = fieldOptions;
  let component;
  if (type === "long-text") {
    component = (
      <textarea
        id={name}
        name={name}
        rows="5"
        required={!optional}
        defaultValue={initial}
      >
      </textarea>
    );
  } else if (type === "dropdown") {
    component = (
      <select name={name} id={name} required={!optional}>
        { options.map(({ value, label }) => (
          <option key={value} value={value} selected={value === initial}>{label}</option>
        )) }
      </select>
    )
  } else if (type === "checkbox") {
    component = (
      <input
        type={type}
        id={name}
        name={name}
        defaultChecked={initial}
      />
    );
  } else {
    component = (
      <input
        type={type}
        id={name}
        name={name}
        required={!optional}
        defaultValue={type === "date" ? convertDateFormat(initial) : initial}
      />
    );
  }
  return (
    <div className="form-field" key={name}>
      { type === "checkbox"
        ? <React.Fragment>
            { component }
            <label htmlFor={name}>{label}</label>
          </React.Fragment>
        : <React.Fragment>
            <label htmlFor={name}><h5>{label}{optional ? " (Optional)": ""}</h5></label>
            { component }
          </React.Fragment> }
    </div>
  );
}

export default function Form({ fields, submit, submitLabel }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    submit(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      { fields.map(generateField) }
      <input type="submit" value={submitLabel} className="primary"/>
    </form>
  )
}