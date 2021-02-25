import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';

const Page = (props) => {
  const {
    title,
    children,
    className="",
    navigationPanel,
    isError=false,
    errorMessage
  } = props;
  const { token, role } = useSelector(state => state.user);

  const headerLink = !token ? "/login" : "/" + role;

  return (
    <React.Fragment>
      <header>
        <div className="app-title">
          <Link className="app-title-text" to={headerLink}>
            <h1>IndustryConnect</h1>
          </Link>
        </div>
        <div className="page-title">
          <h2>{title}</h2>
        </div>
      </header>
      <main>
        {navigationPanel}
        <div className="page-container">
          <div className={`page ${className}`}>
            {isError ? errorMessage : children}
          </div>
          <footer></footer>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Page;
