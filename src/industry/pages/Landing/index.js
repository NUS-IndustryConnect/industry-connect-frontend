import React from 'react';

import Manage from '../Post/Manage';
import Introduction from './Introduction';

export default function Landing({ isLoggedIn }) {
  return isLoggedIn ? <Manage /> : <Introduction />;
}