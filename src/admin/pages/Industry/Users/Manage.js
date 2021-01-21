import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ButtonLink from '../../../../common/ButtonLink';
import { userThunks, activeUsersSelector, archivedUsersSelector } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import SelectTable from '../../../../common/SelectTable';

export default function Manage() {
  const activeUsers = useSelector(activeUsersSelector);
  const archivedUsers = useSelector(archivedUsersSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const archiveUser = {
    label: "Archive",
    className: "secondary",
    onClick: selections => {
      dispatch(userThunks.archiveUsers(selections));
    }
  }
  const unarchiveUser = {
    label: "Unarchive",
    className: "secondary",
    onClick: selections => {
      dispatch(userThunks.unarchiveUsers(selections));
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
      <ButtonLink to="/admin/industry/users/new" label="New Company User" className="primary" />
      
      <section>
        <h3>Active</h3>
        <SelectTable
          headers={["Name", "Email Address", "Company", "Tier", "Last Login"]}
          data={activeUsers}
          dataToRow={dataToRow}
          idKey="companyUserID"
          actions={[ archiveUser ]}
        />
      </section>
      <section>
        <h3>Archived</h3>
        <SelectTable
          headers={["Name", "Email Address", "Company", "Tier", "Last Login"]}
          data={archivedUsers}
          dataToRow={dataToRow}
          idKey="companyUserID"
          actions={[ unarchiveUser ]}
        />
      </section>
    </Page>
  )
}
