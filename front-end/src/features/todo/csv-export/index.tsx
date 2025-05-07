import { Button } from "@heroui/react";
import { useAppSelector } from "../../../entities/hooks/redux";

export const CsvExport = () => {
  const { todos } = useAppSelector((state) => state.taskSlice);

  const exportToCsv = () => {
    if (!todos || todos.length === 0) {
      alert("No todos were found");
      return;
    }

    const headers = [
      "ID",
      "Title",
      "Description",
      "Status",
      "Deadline",
      "Created At",
    ];

    const csvRows = [
      headers.join(","),
      ...todos.map((todo) =>
        [
          todo._id,
          `"${todo.title?.replace(/"/g, '""') || ""}"`,
          `"${todo.description?.replace(/"/g, '""') || ""}"`,
          todo.done ? "Completed" : "Pending",
          // todo.deadline ? new Date(todo.deadline).toLocaleString() : "",
          todo.createdAt ? new Date(todo.createdAt).toLocaleString() : "",
        ].join(",")
      ),
    ];

    const csvContent = csvRows.join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `todos-export.csv`);
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return <Button onPress={exportToCsv}>Export as CSV</Button>;
};
