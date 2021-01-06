import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import adminApi from '../../../api';

import Page from '../../Page';
import SelectTable from '../../SelectTable';

export default function Manage() {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    adminApi.companyUsers.getCompanyUsers().then(setData);
  }, []);

  const dataToRow = (data, checkbox) => {
    const { companyUserID, userEmail, company, lastLoggedIn } = data;
    const handleClick = () => history.push(`/admin/industry/users/view/${companyUserID}`);
    return (
      <tr key={companyUserID} >
        <td>{ checkbox }</td>
        <td className="clickable" onClick={handleClick}>{userEmail}</td>
        <td className="clickable" onClick={handleClick}>{company.companyName}</td>
        <td className="clickable" onClick={handleClick}>{company.companyTier}</td>
        <td className="clickable" onClick={handleClick}>{lastLoggedIn.toLocaleDateString()}</td>
      </tr>
    )
  };
  
  const deleteItems = (selections) => {
    // TODO: link up to BE API (temporary placeholder)
    console.log("Deleting ", selections);
  }

  return (
    <Page title="Manage Company Users">
      <Link to="/admin/industry/users/new">
        <button className="primary">New Company</button>
      </Link>
      
      <SelectTable
        headers={["Email Address", "Company", "Tier", "Last Login"]}
        data={data}
        dataToRow={dataToRow}
        idKey="companyUserID"
        actions={[
          { label: "Delete", className: "warning", onClick: deleteItems }
        ]}
      />
    </Page>
  )
}