import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

import ButtonLink from '../../../../common/ButtonLink';
import { companyThunks, activeCompaniesSelector, archivedCompaniesSelector } from '../../../../redux/industry/companySlice';
import Page from '../../Page';
import SelectTable from '../../../../common/SelectTable';
import { COMPANY_TIERS } from './CompaniesForm';

export default function Manage() {
  const activeCompanies = useSelector(activeCompaniesSelector);
  const archivedCompanies = useSelector(archivedCompaniesSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selections, setSelections] = useState([]);

  const dataToRow = (data, checkbox) => {
    const { companyId, companyName, companyTier } = data;
    const companyTierDisplay = COMPANY_TIERS.find(elem => elem.value === companyTier).label;
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
  }

  const unarchiveCompany = {
    label: "Unarchive",
    className: "secondary",
    onClick: selections => {
      dispatch(companyThunks.unarchiveCompanies(selections))
    }
  }

  return (
    <Page title="Manage Company">
      <ButtonLink to="/admin/industry/companies/new" label="New Company" className="primary" />
      <Popup modal open={isModalOpen}>
        <div className="modal">
          <p>NOTE: Attempting to archive {selections.length} {selections.length === 1 ? "company" : "companies"}. If these companies still have pending post requests, the requests will be deleted. If the company is unarchived in future, they will have to re-submit their post requests.</p>
          <div className="action-buttons right">
            <button className="right" onClick={() => setModalOpen(false)}>Cancel</button>
            <button className="warning right" onClick={handleArchive}>Archive</button>
          </div>
        </div>
    </Popup>
      <section>
        <h3>Active</h3>
        <SelectTable
          headers={["Company Name", "Tier"]}
          data={activeCompanies}
          dataToRow={dataToRow}
          idKey="companyId"
          actions={[ archiveCompany ]}
        />
      </section>
      <section>
        <h3>Archived</h3>
        <SelectTable
          headers={["Company Name", "Tier"]}
          data={archivedCompanies}
          dataToRow={dataToRow}
          className="archived"
          idKey="companyId"
          actions={[ unarchiveCompany ]}
        />
      </section>
    </Page>
  )
}
