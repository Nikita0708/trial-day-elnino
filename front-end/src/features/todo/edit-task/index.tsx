import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Button, Input } from "@heroui/react";
import { useAppDispatch } from "../../../entities/hooks/redux";
import { Todo } from "../../../shared/api/todos/model";
import { getTodos, update } from "../../../entities/todo/model/task-actions";

type Props = {
  todo: Todo;
};

export const EditTask = ({ todo }: Props) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [valuesChanged, setValuesChanged] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();

  const handleEditTask = () => {
    if (title.length < 3) {
      setError("Title length should be at least 3 characters");
    } else {
      dispatch(update({ id: todo._id, title, description }))
        .then(() => {
          dispatch(getTodos());
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    if (title.length < 3 && title.length > 0) {
      setError("Title length should be at least 3 characters");
    } else {
      setError("");
    }
  }, [title]);

  useEffect(() => {
    if (title !== todo.title || description !== todo.description) {
      setValuesChanged(true);
    } else {
      setValuesChanged(false);
    }
  }, [title, description, todo.title, todo.description]);

  return (
    <>
      <div className="flex flex-col">
        <Input
          placeholder="Start typing your task"
          value={title}
          label="Title"
          variant="underlined"
          onValueChange={setTitle}
          isInvalid={error !== ""}
          errorMessage={error}
          size="lg"
          className="mb-4 w-[300px]"
        />
        <Input
          placeholder="Start typing the description"
          value={description}
          label="Desc"
          variant="underlined"
          onValueChange={setDescription}
          size="sm"
        />
      </div>
      {valuesChanged && (
        <Button
          onPress={handleEditTask}
          className="bg-transparent ml-[30px]"
          disabled={error !== ""}
        >
          <Check color="green" />
        </Button>
      )}
    </>
  );
};
