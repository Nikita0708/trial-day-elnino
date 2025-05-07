import { CreateTaskCard } from "../../entities/todo/ui/create-task-card";
import { CreateTask } from "../../features/todo/create-task";

export const CreateTodoWidget = () => {
  return (
    <CreateTaskCard>
      <h2 className="text-2xl ">Create new Todo</h2>
      <CreateTask />
    </CreateTaskCard>
  );
};
