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

export default function CompanyUserDropdowns({ disabled = false }) {
  const companiesDropdown = useSelector(companiesDropdownSelector);
  const rawCompanyUsersDropdown = useSelector(companyUsersDropdownSelector);
  const [companyId, setCompanyId] = useState(companiesDropdown[0]?.value);
  const [companyUserId, setCompanyUserId] = useState("");
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