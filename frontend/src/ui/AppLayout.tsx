import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="w-full h-svh flex flex-col overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
