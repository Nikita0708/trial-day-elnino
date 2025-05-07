import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../entities/hooks/redux";
import { getTodos } from "../../entities/todo/model/task-actions";
import { Alert } from "@heroui/react";
import { TodoWidget } from "../../widgets/todo";
import { CreateTodoWidget } from "../../widgets/create-todo";
import { SearchTasks } from "../../features/todo/search-tasks";
import { CsvExport } from "../../features/todo/csv-export";
import { JsonExport } from "../../features/todo/json-export";

export const TaskListPage = () => {
  const { todos, error } = useAppSelector((state) => state.taskSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (error) {
    return <Alert color="danger" title={error} />;
  }

  return (
    <>
      <SearchTasks />
      <div>
        <CreateTodoWidget />
      </div>
      <div className="flex m-[30px] gap-[15px]">
        <CsvExport />
        <JsonExport />
      </div>

      <div>
        {todos.map((task) => (
          <TodoWidget todo={task} />
        ))}
      </div>
    </>
  );
};
