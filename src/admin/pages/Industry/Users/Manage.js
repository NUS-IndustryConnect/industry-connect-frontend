<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getCompanyUsers } from '../../../api/users';

=======
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ButtonLink from '../../../../common/ButtonLink';
import { usersSelector, userThunks } from '../../../../redux/industry/userSlice';
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
import Page from '../../Page';
import SelectTable from '../../SelectTable';

export default function Manage() {
<<<<<<< HEAD
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getCompanyUsers().then(setData);
  }, []);

  const dataToRow = (data, checkbox) => {
    const { companyUserID, userEmail, company, lastLogin } = data;
=======
  const users = useSelector(usersSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteUser = {
    label: "Delete",
    className: "warning",
    onClick: selections => {
      dispatch(userThunks.deleteUsers(selections));
    }
  }

  const dataToRow = (data, checkbox) => {
    const { companyUserID, name, userEmail, company, lastLoggedIn } = data;
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
    const handleClick = () => history.push(`/admin/industry/users/view/${companyUserID}`);
    return (
      <tr key={companyUserID} >
        <td>{ checkbox }</td>
<<<<<<< HEAD
        <td className="clickable" onClick={handleClick}>{userEmail}</td>
        <td className="clickable" onClick={handleClick}>{company.companyName}</td>
        <td className="clickable" onClick={handleClick}>{company.companyTier}</td>
        <td className="clickable" onClick={handleClick}>{lastLogin.toLocaleDateString()}</td>
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
=======
        <td className="clickable" onClick={handleClick}>{name}</td>
        <td className="clickable" onClick={handleClick}>{userEmail}</td>
        <td className="clickable" onClick={handleClick}>{company.companyName}</td>
        <td className="clickable" onClick={handleClick}>{company.companyTier}</td>
        <td className="clickable" onClick={handleClick}>{lastLoggedIn.toLocaleDateString()}</td>
      </tr>
    )
  };

  return (
    <Page title="Manage Company Users">
      <ButtonLink to="/admin/industry/users/new" label="New Company User" className="primary" />
      
      <SelectTable
        headers={["Name", "Email Address", "Company", "Tier", "Last Login"]}
        data={users}
        dataToRow={dataToRow}
        idKey="companyUserID"
        actions={[ deleteUser ]}
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
      />
    </Page>
  )
}