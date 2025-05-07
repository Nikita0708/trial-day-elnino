import { useState } from "react";
import { useAppDispatch } from "../../../entities/hooks/redux";
import { create, getTodos } from "../../../entities/todo/model/task-actions";
import { Button, Input } from "@heroui/react";
import { Navigation } from "lucide-react";

export const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();

  const handleCreateTask = () => {
    if (!title && !description) return alert("enter the detailes first");

    dispatch(create({ title, description }))
      .then(() => {
        dispatch(getTodos());
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Input
        placeholder="Start typing your task"
        value={title}
        label="Title"
        variant="underlined"
        onValueChange={setTitle}
        className="mb-[15px]"
      />
      <Input
        placeholder="Start typing the description"
        value={description}
        label="Description"
        variant="underlined"
        onValueChange={setDescription}
      />
      {title && (
        <Button onPress={handleCreateTask} className="bg-transparent">
          <Navigation color="green" />
        </Button>
      )}
    </>
  );
};
