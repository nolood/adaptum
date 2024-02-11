import { type FC } from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout: FC = () => {
  return (
    <div>
      Protected Layout
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
