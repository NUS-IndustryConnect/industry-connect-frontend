import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getCompanies } from '../../../api/companies';

import Page from '../../Page';
import Table from '../../Table';

export default function Manage() {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getCompanies().then(setData);
  }, []);

  const dataToRow = ({ companyID, companyName, companyTier }) => (
    <tr
      key={companyID}
      onClick={() => history.push(`/admin/industry/companies/view/${companyID}`)}
      className="clickable"
    >
      <td>{companyName}</td>
      <td>{companyTier}</td>
    </tr>
  );

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