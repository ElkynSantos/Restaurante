import { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { getPermissionsByUser } from '../../services/roles';
import { PublicRoutes } from '../../models/routes';

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = -1,
  children,
}) => {
  let location = useLocation();

  if(!isAllowed)
    return <Navigate to={redirectTo}/>

  if(PublicRoutes.includes(location.pathname))
    return children? children : <Outlet />;

  const [authorized, setAuthorized] = useState(true);
  
  useEffect(() => {
      const getPermissions = async () => {
          await getPermissionsByUser()
            .then(permissions => {
                setAuthorized(permissions.includes(location.pathname));
            })
            .catch()
      };

      getPermissions();
  }, []);
  
  if(!authorized)
    return <Navigate to={redirectTo}/>

  if(authorized)
    return children? children : <Outlet />;
};

// export default ProtectedRoute;