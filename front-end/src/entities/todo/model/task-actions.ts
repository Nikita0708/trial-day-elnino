import { createAsyncThunk } from "@reduxjs/toolkit";
import { todoAPI } from "../../../shared/api/todos";

export const create = createAsyncThunk(
  "to-do/create",
  async (data: { title: string; description: string }, thunkAPI) => {
    try {
      const response = await todoAPI.create(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to create new ToDo");
    }
  }
);

export const update = createAsyncThunk(
  "to-do/update",
  async (
    data: { id: string; title: string; description: string },
    thunkAPI
  ) => {
    try {
      const response = await todoAPI.update(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to update ToDo");
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "to-do/delete",
  async (id: string, thunkAPI) => {
    try {
      const response = await todoAPI.delete(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete ToDo");
    }
  }
);

export const changeStatus = createAsyncThunk(
  "to-do/changeStatus",
  async (id: string, thunkAPI) => {
    try {
      const response = await todoAPI.changeStatus(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to change status of the todo");
    }
  }
);

export const getTodos = createAsyncThunk(
  "to-do/getTodos",
  async (_, thunkAPI) => {
    try {
      const response = await todoAPI.getTodos();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch todos");
    }
  }
);

export const searchTodos = createAsyncThunk(
  "to-do/searchTodos",
  async (searchTerm: string, thunkAPI) => {
    try {
      const response = await todoAPI.searchByTitle(searchTerm);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to search todos");
    }
  }
);

export const addDeadline = createAsyncThunk(
  "to-do/addDeadline",
  async (data: { id: string; deadline: string }, thunkAPI) => {
    try {
      const response = await todoAPI.addDeadline(data.id, data.deadline);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add a deadline");
    }
  }
);
