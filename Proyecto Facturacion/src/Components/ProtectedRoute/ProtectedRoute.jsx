import { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { getPermissionsByUser } from '../../services/roles';

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = -1,
  children,
}) => {
  const [authorized, setAuthorized] = useState(true);
  let location = useLocation();
  
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