<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getCompanies } from '../../../api/companies';

=======
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ButtonLink from '../../../../common/ButtonLink';
import { companiesSelector, companyThunks } from '../../../../redux/industry/companySlice';
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
import Page from '../../Page';
import SelectTable from '../../SelectTable';

export default function Manage() {
<<<<<<< HEAD
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getCompanies().then(setData);
  }, []);
=======
  const companies = useSelector(companiesSelector);
  const history = useHistory();
  const dispatch = useDispatch();
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada

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
  
<<<<<<< HEAD
  const deleteItems = (selections) => {
    // TODO: link up to BE API (temporary placeholder)
    console.log("Deleting ", selections);
=======
  const deleteCompany = {
    label: "Delete",
    className: "warning",
    onClick: selections => {
      dispatch(companyThunks.deleteCompanies(selections))
    }
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
  }

  return (
    <Page title="Manage Company">
<<<<<<< HEAD
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
=======
      <ButtonLink to="/admin/industry/companies/new" label="New Company" className="primary" />
      
      <SelectTable
        headers={["Company Name", "Tier"]}
        data={companies}
        dataToRow={dataToRow}
        idKey="companyID"
        actions={[ deleteCompany ]}
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
      />
    </Page>
  )
}