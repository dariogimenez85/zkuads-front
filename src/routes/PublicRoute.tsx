import { Outlet, Navigate } from 'react-router-dom';

import { useLoginQuery } from '../redux/api/zkuadsApi';

const PublicRoute = () => {
    const { data, isLoading, isError, error } = useLoginQuery();

    if (isLoading) return (<div>Loading...</div>);

    const isAuthorized = data?.loggedIn || false;

    return !isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;