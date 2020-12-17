import React from 'react';

import Form from '../../Form';

const TIERS = [
  { value: 1, label: "Gold" },
  { value: 2, label: "Silver" }
];

export const getCompanyFields = data => ({
  companyName: data.get('name'),
  tier: data.get('tier'),
});

export default function CompaniesForm({ submit, initial }) {
  return (
    <Form
      fields={[
        { type: "text", name: "name", label: "Company Name", initial: initial?.name },
        { type: "dropdown", name: "tier", label: "Tier", options: TIERS, initial: initial?.tier },
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
    />
  )
}