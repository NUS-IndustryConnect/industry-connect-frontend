import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Page from '../../Page';
import SelectTable from '../../SelectTable';
import { companiesSelector, companyThunks } from '../../../../redux/industry/companySlice';

export default function Manage() {
  const companies = useSelector(companiesSelector);
  const history = useHistory();
  const dispatch = useDispatch();

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
  
  const deleteCompany = {
    label: "Delete",
    className: "warning",
    onClick: selections => {
      dispatch(companyThunks.deleteCompanies(selections))
    }
  }

  return (
    <Page title="Manage Company">
      <Link to="/admin/industry/companies/new">
        <button className="primary">New Company</button>
      </Link>
      
      <SelectTable
        headers={["Company Name", "Tier"]}
        data={companies}
        dataToRow={dataToRow}
        idKey="companyID"
        actions={[ deleteCompany ]}
      />
    </Page>
  )
}