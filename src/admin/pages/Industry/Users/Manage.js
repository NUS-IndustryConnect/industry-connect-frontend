import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getCompanyUsers } from '../../../api/users';

import Page from '../../Page';
import Table from '../../Table';

const dataToRow = ({ companyUserID, userEmail, company, lastLogin }) => (
  <tr key={companyUserID}>
    <td>{userEmail}</td>
    <td>{company.companyName}</td>
    <td>{company.companyTier}</td>
    <td>{lastLogin.toLocaleDateString()}</td>
  </tr>
);

export default function Manage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCompanyUsers().then(setData);
  }, []);
  return (
    <Page title="Manage Company Users">
      <Link to="/admin/industry/users/new">
        <button className="primary">New Company</button>
      </Link>
      
      <Table
        headers={["Email Address", "Company", "Tier", "Last Login"]}
        data={data}
        dataToRow={dataToRow}
      />
    </Page>
  )
}