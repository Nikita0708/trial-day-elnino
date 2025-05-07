import { Checkbox } from "@heroui/react";
import { useAppDispatch } from "../../../entities/hooks/redux";
import { Todo } from "../../../shared/api/todos/model";
import {
  changeStatus,
  getTodos,
} from "../../../entities/todo/model/task-actions";

type Props = {
  todo: Todo;
};

export const ToggleTask = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(changeStatus(todo._id))
      .then(() => {
        dispatch(getTodos());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <Checkbox isSelected={todo.done} onValueChange={handleToggle} />;
};
