import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import toast from 'react-hot-toast';

import 'reactjs-popup/dist/index.css';

import ButtonLink from '../../../../common/ButtonLink';
import { companyThunks, activeCompaniesSelector, archivedCompaniesSelector, companyComparator } from '../../../../redux/industry/companySlice';
import Page from '../../Page';
import SelectTable from '../../../../common/SelectTable';
import { getCompanyTierDisplay } from './CompaniesForm';
import Tabs from '../../../../common/Tabs';

const ACTIVE = "/admin/industry/companies/active";
const ARCHIVED = "/admin/industry/companies/archived";

const TABS = [
  { name: "Active", link: ACTIVE },
  { name: "Archived", link: ARCHIVED },
];

export default function Manage() {
  const activeCompanies = useSelector(activeCompaniesSelector).sort(companyComparator);
  const archivedCompanies = useSelector(archivedCompaniesSelector).sort(companyComparator);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selections, setSelections] = useState([]);

  const dataToRow = (data, checkbox) => {
    const { companyId, companyName, companyTier } = data;
    const companyTierDisplay = getCompanyTierDisplay(companyTier);
    const handleClick = () => history.push(`/admin/industry/companies/view/${companyId}`);
    return (
      <tr key={companyId} >
        <td>{ checkbox }</td>
        <td className="clickable" onClick={handleClick}>{companyName}</td>
        <td className="clickable" onClick={handleClick}>{companyTierDisplay}</td>
      </tr>
    )
  };
  
  const archiveCompany = {
    label: "Archive",
    className: "secondary",
    onClick: selections => {
      setSelections(selections);
      setModalOpen(true);
    }
  }

  const handleArchive = () => {
    setModalOpen(false);
    setSelections([]);
    dispatch(companyThunks.archiveCompanies(selections));
    toast.success("Archived company");
  }

  const unarchiveCompany = {
    label: "Unarchive",
    className: "secondary",
    onClick: selections => {
      dispatch(companyThunks.unarchiveCompanies(selections));
      toast.success("Unarchived company");
    }
  }

  return (
    <Page title="Manage Companies">
      <ButtonLink to="/admin/industry/companies/new" label="New Company" className="primary" />

      <Tabs tabs={TABS} />

      <Popup modal open={isModalOpen}>
        <div className="modal">
          <p>NOTE: Attempting to archive {selections.length} {selections.length === 1 ? "company" : "companies"}. If these companies still have pending post requests, the requests will be deleted. If the company is unarchived in future, they will have to re-submit their post requests.</p>
          <div className="action-buttons right">
            <button className="right" onClick={() => setModalOpen(false)}>Cancel</button>
            <button className="warning right" onClick={handleArchive}>Archive</button>
          </div>
        </div>
      </Popup>

      <Switch>
        <Route exact path="/admin/industry/companies"><Redirect to={TABS[0].link} /></Route>
        <Route path={ACTIVE}>
          <SelectTable
            headers={["Company Name", "Tier"]}
            data={activeCompanies}
            dataToRow={dataToRow}
            idKey="companyId"
            actions={[ archiveCompany ]}
          />
        </Route>
        <Route path={ARCHIVED}>
          <SelectTable
            headers={["Company Name", "Tier"]}
            data={archivedCompanies}
            dataToRow={dataToRow}
            className="archived"
            idKey="companyId"
            actions={[ unarchiveCompany ]}
          />
        </Route>
      </Switch>
    </Page>
  )
}
