import React from 'react';

import Form from '../../../../common/Form';

const TIERS = [
  { value: "Gold", label: "Gold" },
  { value: "Silver", label: "Silver" }
];

export const getCompanyFields = data => ({
  companyName: data.get('name'),
  companyTier: data.get('tier'),
  companyDescription: data.get('description'),
});

export default function CompaniesForm({ submit, initial }) {
  return (
    <Form
      fields={[
        { type: "text", name: "name", label: "Company Name", initial: initial?.name },
        { type: "dropdown", name: "tier", label: "Tier", options: TIERS, initial: initial?.tier },
        { type: "long-text", name: "description", label: "Company Description", initial: initial?.description },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
    />
  )
}