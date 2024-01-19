import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="box-layout">
      <Outlet />
    </div>
  );
}
