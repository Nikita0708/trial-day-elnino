import { Button } from "@heroui/react";
import { useAppSelector } from "../../../entities/hooks/redux";

export const JsonExport = () => {
  const { todos } = useAppSelector((state) => state.taskSlice);

  const exportToJson = () => {
    if (!todos || todos.length === 0) {
      alert("No todos to export");
      return;
    }

    const formattedTodos = todos.map((todo) => ({
      ...todo,
      deadline: todo.deadline || null,
    }));

    const jsonContent = JSON.stringify(formattedTodos, null, 2);

    const blob = new Blob([jsonContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.setAttribute("href", url);
    link.setAttribute("download", `todos-export.json`);
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return <Button onPress={exportToJson}>Export to JSON</Button>;
};
