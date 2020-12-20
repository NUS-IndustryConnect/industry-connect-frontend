import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getCompanies } from '../../../api/companies';

import Page from '../../Page';
import SelectTable from '../../SelectTable';

export default function Manage() {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getCompanies().then(setData);
  }, []);

  const dataToRow = (data, checkbox) => {
    const { companyID, companyName, companyTier } = data;
    const handleClick = () => history.push(`/admin/industry/companies/view/${companyID}`);
    return (
      <tr key={companyID} >
        <td>{ checkbox }</td>
        <td className="clickable" onClick={handleClick}>{companyName}</td>
        <td className="clickable" onClick={handleClick}>{companyTier}</td>
      </tr>
    )
  };
  
  const deleteItems = (selections) => {
    // TODO: link up to BE API (temporary placeholder)
    console.log("Deleting ", selections);
  }

  return (
    <Page title="Manage Company">
      <Link to="/admin/industry/companies/new">
        <button className="primary">New Company</button>
      </Link>
      
      <SelectTable
        headers={["Company Name", "Tier"]}
        data={data}
        dataToRow={dataToRow}
        idKey="companyID"
        actions={[
          { label: "Delete", className: "warning", onClick: deleteItems }
        ]}
      />
    </Page>
  )
}