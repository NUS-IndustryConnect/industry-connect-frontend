import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ButtonLink from '../../../../common/ButtonLink';
import { companyThunks, activeCompaniesSelector, archivedCompaniesSelector } from '../../../../redux/industry/companySlice';
import Page from '../../Page';
import SelectTable from '../../../../common/SelectTable';

export default function Manage() {
  const activeCompanies = useSelector(activeCompaniesSelector);
  const archivedCompanies = useSelector(archivedCompaniesSelector);
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
  
  const archiveCompany = {
    label: "Archive",
    className: "secondary",
    onClick: selections => {
      dispatch(companyThunks.archiveCompanies(selections))
    }
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
      
      <section>
        <h3>Active</h3>
        <SelectTable
          headers={["Company Name", "Tier"]}
          data={activeCompanies}
          dataToRow={dataToRow}
          idKey="companyID"
          actions={[ archiveCompany ]}
        />
      </section>
      <section>
        <h3>Archived</h3>
        <SelectTable
          headers={["Company Name", "Tier"]}
          data={archivedCompanies}
          dataToRow={dataToRow}
          idKey="companyID"
          actions={[ unarchiveCompany ]}
        />
      </section>
    </Page>
  )
}
