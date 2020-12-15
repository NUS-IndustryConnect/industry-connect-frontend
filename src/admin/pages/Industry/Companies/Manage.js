import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getCompanies } from '../../../api/companies';

import Page from '../../Page';
import Table from '../../Table';

const dataToRow = ({ companyID, companyName, companyTier }) => (
  <tr key={companyID}>
    <td>{companyName}</td>
    <td>{companyTier}</td>
  </tr>
);

export default function Manage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCompanies().then(setData);
  }, []);
  return (
    <Page title="Manage Company">
      <Link to="/admin/industry/companies/new">
        <button className="primary">New Company</button>
      </Link>
      
      <Table
        headers={["Company Name", "Tier"]}
        data={data}
        dataToRow={dataToRow}
      />
    </Page>
  )
}