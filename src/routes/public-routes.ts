import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const accessToken = useSelector(({ auth }) => auth.data.accessToken);
  // const lastActiveRoute = useSelector(({ modalMenu }) => modalMenu.activeRoute);
  const location = useLocation();
  // return token == null || token == undefined || Object.keys(token).length == 0 ? (
  return accessToken == null || accessToken == undefined ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
    // <Navigate to={lastActiveRoute} state={{ from: location }} replace />
  );
};

export default PublicRoute;
