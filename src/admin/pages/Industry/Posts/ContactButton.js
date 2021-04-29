import React from 'react';
import { MdContentCopy } from 'react-icons/md';
import toast from 'react-hot-toast';

const copyToClipboard = item => {
  navigator.clipboard.writeText(item);
  toast.success("Copied to clipboard");
};

export default function ContactButton({ email }) {
  return email ? (
    <button className="secondary email" onClick={() => copyToClipboard(email)}>
      Contact email
      <span className="email-address">{email}<MdContentCopy className="copy-icon"/></span>
    </button>
  ) : null;
}