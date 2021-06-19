import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { companyUsersDropdownSelector } from '../../redux/industry/userSlice';
import { companiesDropdownSelector } from '../../redux/industry/companySlice';

const Dropdown = ({ name, value, onChange, options, disabled }) => {
  return <div className="form-field" key={name}>
    <label htmlFor={name}><h5>Company</h5></label>
    <select name={name} id={name} required disabled={disabled}
      value={value} onChange={onChange}>
      { options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      )) }
    </select>
  </div>
}

export default function CompanyUserDropdowns({ disabled = false, initial = {} }) {
  // get all dropdown values from Redux
  const companiesDropdown = useSelector(companiesDropdownSelector);
  const rawCompanyUsersDropdown = useSelector(companyUsersDropdownSelector);

  // keep track of selected values
  const defaultCompanyId = (disabled && initial.companyId) ? initial.companyId : companiesDropdown[0]?.value;
  const defaultCompanyUserId = disabled ? initial.companyUserId : "";
  const [companyId, setCompanyId] = useState(defaultCompanyId);
  const [companyUserId, setCompanyUserId] = useState(defaultCompanyUserId);
  const [filteredCompanyUsers, setFilteredCompanyUsers] = useState(rawCompanyUsersDropdown);

  useEffect(() => {
    setFilteredCompanyUsers(rawCompanyUsersDropdown
      .filter(elem => elem.companyId === companyId));
  }, [companyId, rawCompanyUsersDropdown]);

  // 2 dropdowns as controlled components
  // Selecting a company in the compay dropdown changes the options shown in the company users dropdown
  return (
    <React.Fragment>
      <Dropdown
        name="companyId"
        value={companyId}
        onChange={event => setCompanyId(event.target.value)}
        options={companiesDropdown}
        disabled={disabled}
      />
      <Dropdown
        name="companyUserId"
        value={companyUserId}
        onChange={event => setCompanyUserId(event.target.value)}
        options={filteredCompanyUsers}
        disabled={disabled}
      />
    </React.Fragment>
  );
}