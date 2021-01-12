import React from 'react';

<<<<<<< HEAD
import Form from '../../Form';

const TIERS = [
  { value: 1, label: "Gold" },
  { value: 2, label: "Silver" }
];

export const getCompanyFields = data => ({
  companyName: data.get('name'),
  tier: data.get('tier'),
=======
import Form from '../../../../common/Form';

const TIERS = [
  { value: "Gold", label: "Gold" },
  { value: "Silver", label: "Silver" }
];

export const getCompanyFields = data => ({
  companyName: data.get('companyName'),
  companyTier: data.get('companyTier'),
  companyDescription: data.get('companyDescription'),
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
});

export default function CompaniesForm({ submit, initial }) {
  return (
    <Form
      fields={[
<<<<<<< HEAD
        { type: "text", name: "name", label: "Company Name", initial: initial?.name },
        { type: "dropdown", name: "tier", label: "Tier", options: TIERS, initial: initial?.tier },
=======
        { type: "text", name: "companyName", label: "Company Name", initial: initial?.companyName },
        { type: "dropdown", name: "companyTier", label: "Tier", options: TIERS, initial: initial?.companyTier },
        { type: "long-text", name: "companyDescription", label: "Company Description", initial: initial?.companyDescription },
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
      ]}
      submit={submit}
      submitLabel={initial ? "Update" : "Create"}
    />
  )
}