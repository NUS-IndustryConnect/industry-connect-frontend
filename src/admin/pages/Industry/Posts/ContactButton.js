import React from 'react';

const copyToClipboard = item => navigator.clipboard.writeText(item);

export default function ContactButton({ email }) {
  return email ? (
    <button className="secondary email" onClick={() => copyToClipboard(email)}>
      Contact email
      <span className="email-address">{email}</span>
    </button>
  ) : null;
}