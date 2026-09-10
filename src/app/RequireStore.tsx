import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getStoreId } from "../lib/session";
import { AppShell } from "./AppShell";

export function RequireStore() {
  const storeId = getStoreId();
  const location = useLocation();
  if (!storeId) {
    return <Navigate to="/app" replace state={{ from: location.pathname }} />;
  }
  return (
    <AppShell storeId={storeId}>
      <Outlet />
    </AppShell>
  );
}
