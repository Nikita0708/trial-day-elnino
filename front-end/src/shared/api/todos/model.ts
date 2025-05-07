export type Todo = {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  deadline: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTodoResponse = {
  message: string;
  newTodo: Todo;
};

export type UpdateTodoResponse = {
  message: string;
  updatedTodo: Todo;
};

export type DeleteTodoResponse = {
  message: string;
};
