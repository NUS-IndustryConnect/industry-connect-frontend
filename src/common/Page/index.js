import React from 'react';

import './index.css';

const Page = ({ title, children, className = "", navigationPanel, isError = true, errorMessage }) => {
  console.log("isError", isError);
  return (
    <React.Fragment>
      <header>
        <div className="app-title">
          <h1>IndustryConnect</h1>
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