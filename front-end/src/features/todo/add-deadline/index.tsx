import { DatePicker } from "@heroui/react";
import { Todo } from "../../../shared/api/todos/model";
import { useEffect, useState } from "react";
import {
  parseDate,
  CalendarDate,
  getLocalTimeZone,
} from "@internationalized/date";
import { useAppDispatch } from "../../../entities/hooks/redux";
import { addDeadline } from "../../../entities/todo/model/task-actions";

type Props = {
  todo: Todo;
};

export const AddDeadline = ({ todo }: Props) => {
  const initialValue: CalendarDate | null = todo.deadline
    ? parseDate(todo.deadline)
    : null;
  const [value, setValue] = useState<CalendarDate | null>(initialValue);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (value) {
      const localDate = value.toDate(getLocalTimeZone());
      const year = localDate.getFullYear();
      const month = String(localDate.getMonth() + 1).padStart(2, "0");
      const day = String(localDate.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      dispatch(
        addDeadline({
          id: todo._id,
          deadline: formattedDate,
        })
      );
    }
  }, [value, todo._id, dispatch]);

  return (
    <DatePicker
      className="max-w-[184px]"
      label="Deadline"
      value={value}
      onChange={setValue}
    />
  );
};
