import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Page from '../../Page';
import SelectTable from '../../SelectTable';
import { usersSelector, userThunks } from '../../../../redux/industry/userSlice';

export default function Manage() {
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
    const handleClick = () => history.push(`/admin/industry/users/view/${companyUserID}`);
    return (
      <tr key={companyUserID} >
        <td>{ checkbox }</td>
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
      <Link to="/admin/industry/users/new">
        <button className="primary">New Company</button>
      </Link>
      
      <SelectTable
        headers={["Name", "Email Address", "Company", "Tier", "Last Login"]}
        data={users}
        dataToRow={dataToRow}
        idKey="companyUserID"
        actions={[ deleteUser ]}
      />
    </Page>
  )
}