import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const loaction = useLocation();
    // console.log(loaction.pathname);

    if (loading) {
        return <span className="loading loading-infinity loading-xs"></span>

    }
    if (!user) {
        return <Navigate state={loaction?.pathname} to='/login'></Navigate>;
    }
    return children;
};

export default PrivateRoute;