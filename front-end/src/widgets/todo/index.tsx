import { TaskCard } from "../../entities/todo/ui/task-card";
import { AddDeadline } from "../../features/todo/add-deadline";
import { DeleteTask } from "../../features/todo/delete-task";
import { EditTask } from "../../features/todo/edit-task";
import { ToggleTask } from "../../features/todo/toggle-task";
import { Todo } from "../../shared/api/todos/model";

type Props = {
  todo: Todo;
};

export const TodoWidget = ({ todo }: Props) => {
  return (
    <>
      <TaskCard key={todo._id}>
        <ToggleTask todo={todo} />
        <EditTask todo={todo} />
        <DeleteTask todo={todo} />
        <AddDeadline todo={todo} />
      </TaskCard>
    </>
  );
};
