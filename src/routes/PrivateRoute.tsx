import { Outlet, Navigate } from 'react-router-dom';

import { useLoginQuery } from '../redux/api/zkuadsApi';

const PrivateRoute = () => {
    const { data, isLoading, isError, error } = useLoginQuery();

    if (isLoading) return (<div>Loading...</div>);

    const isAuthorized = data?.loggedIn || false;

    return isAuthorized ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;