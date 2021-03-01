import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
	return (
		<Route {...rest} render={(props) => (
				auth === true
					? <Component {...props} />
					: <Redirect to='/admin/login' />
			)} 
		/>
	)
}
			
export default ProtectedRoute;
        