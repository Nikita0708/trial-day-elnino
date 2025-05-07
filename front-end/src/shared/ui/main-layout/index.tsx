import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <h1 className="p-[30px]">Todo App</h1>
      <Outlet />
    </div>
  );
};
