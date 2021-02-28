import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../redux/user/userActions';

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
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoggedIn, role } = useSelector(state => state.user);
  const headerLink = !isLoggedIn ? "/login" : "/" + role;
  
  const handleLogout = () => {
    dispatch(logout()).then(() => {
      history.push("/login");
    })
  }

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
        {isLoggedIn && (
          <div className="logout-title">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>)}
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
