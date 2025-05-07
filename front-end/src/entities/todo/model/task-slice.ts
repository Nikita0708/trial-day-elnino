import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../../shared/api/todos/model";
import {
  addDeadline,
  changeStatus,
  create,
  deleteTodo,
  getTodos,
  searchTodos,
  update,
} from "./task-actions";

interface TodoState {
  todos: Todo[];
  oneTodo: Todo | null;
  isLoading: boolean;
  message: string;
  error: string;
}

const initialState: TodoState = {
  todos: [],
  oneTodo: null,
  isLoading: false,
  message: "",
  error: "",
};

export const ToDoSlice = createSlice({
  name: "to-do",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // create
    builder.addCase(create.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(create.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.oneTodo = action.payload.newTodo;
      state.message = action.payload.message;
    });

    builder.addCase(create.rejected, (state, action) => {
      state.isLoading = false;
      state.error = (action.payload as string) || "Unknown error occurred";
    });

    // update

    builder.addCase(update.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(update.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.oneTodo = action.payload.updatedTodo;
      state.message = action.payload.message;
    });

    builder.addCase(update.rejected, (state, action) => {
      state.isLoading = false;
      state.error = (action.payload as string) || "Unknown error occurred";
    });

    // delete
    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.message = action.payload.message;
    });

    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = (action.payload as string) || "Unknown error occurred";
    });

    // change status

    builder.addCase(changeStatus.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(changeStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.oneTodo = action.payload;
    });

    builder.addCase(changeStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = (action.payload as string) || "Unknown error occurred";
    });

    // get todos

    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.todos = action.payload;
    });

    builder.addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = (action.payload as string) || "Unknown error occurred";
    });

    // search by title

    builder.addCase(searchTodos.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(searchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.todos = action.payload;
    });

    builder.addCase(searchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = (action.payload as string) || "Unknown error occurred";
    });

    // deadline
    builder.addCase(addDeadline.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addDeadline.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.oneTodo = action.payload;
    });

    builder.addCase(addDeadline.rejected, (state, action) => {
      state.isLoading = false;
      state.error = (action.payload as string) || "Unknown error occurred";
    });
  },
});

export default ToDoSlice.reducer;
