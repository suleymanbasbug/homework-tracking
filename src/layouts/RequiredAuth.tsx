import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
function RequireAuth({ children }: { children: JSX.Element }) {
  const { authUser } = useSelector(({ authUser }: any) => authUser);
  let location = useLocation();
  const localStorageUser = JSON.parse(localStorage.getItem("authUser") || "{}");

  const notAuth = () => {
    localStorage.removeItem("authUser");
    return <Navigate to="/" state={{ from: location }} replace />;
  };
  const userType = localStorageUser.userType;

  if (!authUser && !userType) {
    return notAuth();
  }
  if (location.pathname.includes("teacher") && userType !== 1) {
    return notAuth();
  }
  if (location.pathname.includes("student") && userType !== 2) {
    return notAuth();
  }
  if (location.pathname.includes("admin") && userType !== 3) {
    return notAuth();
  }
  return children;
}

export default RequireAuth;
