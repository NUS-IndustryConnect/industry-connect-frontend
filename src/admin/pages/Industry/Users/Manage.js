import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import ButtonLink from '../../../../common/ButtonLink';
import { companyUserThunks, activeUsersSelector, archivedUsersSelector, userComparator } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import SelectTable from '../../../../common/SelectTable';
import { getCompanyTierDisplay } from '../Companies/CompaniesForm';
import Tabs from '../../../../common/Tabs';

const ACTIVE = "/admin/industry/users/active";
const ARCHIVED = "/admin/industry/users/archived";

const TABS = [
  { name: "Active", link: ACTIVE },
  { name: "Archived", link: ARCHIVED },
];

export default function Manage() {
  const activeUsers = useSelector(activeUsersSelector).sort(userComparator);
  const archivedUsers = useSelector(archivedUsersSelector).sort(userComparator);
  const history = useHistory();
  const dispatch = useDispatch();

  const archiveUser = {
    label: "Archive",
    className: "secondary",
    onClick: selections => {
      dispatch(companyUserThunks.archiveUsers(selections));
      toast.success("Archived user(s)");
    }
  }
  const unarchiveUser = {
    label: "Unarchive",
    className: "secondary",
    onClick: selections => {
      dispatch(companyUserThunks.unarchiveUsers(selections));
      toast.success("Unarchived user(s)");
    }
  }

  const dataToRow = (data, checkbox) => {
    const { companyUserId, email, company, lastLoggedIn, isLocked } = data;
    const companyTierDisplay = getCompanyTierDisplay(company?.companyTier);
    const handleClick = () => history.push(`/admin/industry/users/view/${companyUserId}`);
    return (
      <tr key={companyUserId} className={isLocked ? "warning" : null}>
        <td>{ checkbox }</td>
        <td className="clickable" onClick={handleClick}>{company?.companyName}</td>
        <td className="clickable" onClick={handleClick}>{companyTierDisplay}</td>
        <td className="clickable" onClick={handleClick}>{email}</td>
        <td className="clickable" onClick={handleClick}>{new Date(lastLoggedIn).toLocaleDateString()}</td>
      </tr>
    )
  };

  return (
    <Page title="Manage Company Users">
      <ButtonLink to="/admin/industry/users/new" label="New Company User" className="primary" />

      <Tabs tabs={TABS} />

      <Switch>
        <Route exact path="/admin/industry/users"><Redirect to={TABS[0].link} /></Route>
        <Route path={ACTIVE}>
          <SelectTable
            headers={["Company", "Tier", "Email Address", "Last Login"]}
            data={activeUsers}
            dataToRow={dataToRow}
            idKey="companyUserId"
            actions={[ archiveUser ]}
          />
        </Route>
        <Route path={ARCHIVED}>
          <SelectTable
            headers={["Company", "Tier", "Email Address", "Last Login"]}
            data={archivedUsers}
            dataToRow={dataToRow}
            className="archived"
            idKey="companyUserId"
            actions={[ unarchiveUser ]}
          />
        </Route>
      </Switch>
    </Page>
  )
}
