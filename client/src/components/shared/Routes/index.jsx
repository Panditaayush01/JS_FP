import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';
import SermonRoutes from '../../Sermons/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes />
      <UserRoutes />
      <AuthenticationRoutes />
      <SermonRoutes />
    </>
  );
}

export default Routes;