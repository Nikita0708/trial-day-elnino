import HttpError from "../../helpers/HttpError";
import { ToDoModel } from "./to-do.entity";

export class TodoService {
  async create(title: string, description: string) {
    let newToDo = new ToDoModel({ title, description });
    return await newToDo.save();
  }

  async update(_id: string, title: string, description: string) {
    const existingTodo = ToDoModel.findById(_id);

    if (!existingTodo) {
      throw HttpError(404, "Todo was not found");
    }

    return await ToDoModel.findByIdAndUpdate(
      _id,
      { title, description },
      { new: true }
    );
  }

  async delete(_id: string) {
    const existingTodo = ToDoModel.findById(_id);

    if (!existingTodo) {
      throw HttpError(404, "Todo was not found");
    }

    return await ToDoModel.findByIdAndDelete(_id);
  }

  async changeStatus(_id: string) {
    const existingTodo = await ToDoModel.findById(_id);

    if (!existingTodo) {
      throw HttpError(404, "Todo was not found");
    }

    return await ToDoModel.findByIdAndUpdate(
      _id,
      { done: !existingTodo.done },
      { new: true }
    );
  }

  async fetchTodo() {
    const todos = await ToDoModel.find();

    if (!todos) {
      throw HttpError(404, "Todo was not found");
    }

    return todos.reverse();
  }

  async searchByTitle(searchString: string) {
    if (!searchString) {
      return await this.fetchTodo();
    }

    const searchRegex = new RegExp(searchString, "i");

    const todos = await ToDoModel.find({ title: searchRegex });

    return todos;
  }

  async addDeadline(_id: string, date: string) {
    const existingTodo = await ToDoModel.findById(_id);

    if (!existingTodo) {
      throw HttpError(404, "Todo was not found");
    }

    const updatedTodo = await ToDoModel.findByIdAndUpdate(
      _id,
      {
        deadline: date,
      },
      { new: true }
    );

    return updatedTodo;
  }
}
