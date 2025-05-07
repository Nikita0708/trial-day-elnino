import { Button } from "@heroui/react";
import { useAppDispatch } from "../../../entities/hooks/redux";
import { Todo } from "../../../shared/api/todos/model";
import { Trash2 } from "lucide-react";
import {
  deleteTodo,
  getTodos,
} from "../../../entities/todo/model/task-actions";

type Props = {
  todo: Todo;
};

export const DeleteTask = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTodo(todo._id))
      .then(() => {
        dispatch(getTodos());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Button onPress={handleDeleteTask} className="bg-transparent ml-auto">
      <Trash2 color="red" />
    </Button>
  );
};
