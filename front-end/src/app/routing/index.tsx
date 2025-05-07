import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared/ui/main-layout";
import { TaskListPage } from "../../pages/task-list-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TaskListPage />,
      },
    ],
  },
]);
