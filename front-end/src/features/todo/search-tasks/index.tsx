import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../entities/hooks/redux";
import { Input } from "@heroui/react";
import { Search } from "lucide-react";
import { searchTodos } from "../../../entities/todo/model/task-actions";

export const SearchTasks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchTodos(searchTerm));
  }, [searchTerm]);

  return (
    <Input
      isClearable
      value={searchTerm}
      onValueChange={setSearchTerm}
      label="Search"
      placeholder="Type to search"
      radius="lg"
      startContent={<Search color="black" size={20} />}
      className="p-[30px]"
    />
  );
};
