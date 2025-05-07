import { Request, Response } from "express";
import { TodoService } from "./to-do.service";
import {
  TodoAddDeadline,
  TodoBodyCreate,
  TodoBodyUpdate,
  TodoWithParams,
  TodoWithQuery,
} from "../../types/TodoRequests";
import ctrlWrapper from "../../helpers/ctrlWrapper";

const todoService = new TodoService();

export const create = async (req: TodoBodyCreate, res: Response) => {
  const newTodo = await todoService.create(
    req.body.title,
    req.body.description
  );

  return res
    .status(201)
    .json({ message: "Successfully created todo", newTodo });
};

export const update = async (req: TodoBodyUpdate, res: Response) => {
  const updatedTodo = await todoService.update(
    req.params.id,
    req.body.title,
    req.body.description
  );

  return res
    .status(201)
    .json({ message: "Successfully updated todo", updatedTodo });
};

export const deleteTodo = async (req: TodoWithParams, res: Response) => {
  await todoService.delete(req.params.id);
  return res.status(200).json({ message: "Successfully deleted ToDo" });
};

export const changeStatus = async (req: TodoWithParams, res: Response) => {
  const updatedTodo = await todoService.changeStatus(req.params.id);
  return res.status(200).json(updatedTodo);
};

export const fetchTodo = async (req: Request, res: Response) => {
  const todos = await todoService.fetchTodo();
  return res.status(200).json(todos);
};

export const searchByTitle = async (req: TodoWithQuery, res: Response) => {
  const searchTerm = req.query.title || "";
  const todos = await todoService.searchByTitle(searchTerm);
  return res.status(200).json(todos);
};

export const addDeadline = async (req: TodoAddDeadline, res: Response) => {
  const updatedTodo = await todoService.addDeadline(
    req.params.id,
    req.body.date
  );

  res.status(201).json(updatedTodo);
};

export default {
  create: ctrlWrapper(create),
  update: ctrlWrapper(update),
  deleteTodo: ctrlWrapper(deleteTodo),
  changeStatus: ctrlWrapper(changeStatus),
  fetchTodo: ctrlWrapper(fetchTodo),
  searchByTitle: ctrlWrapper(searchByTitle),
  addDeadline: ctrlWrapper(addDeadline),
};
