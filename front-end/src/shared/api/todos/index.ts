import baseAPI from "../http-client";
import {
  CreateTodoResponse,
  DeleteTodoResponse,
  Todo,
  UpdateTodoResponse,
} from "./model";

export const todoAPI = {
  async create(data: { title: string; description: string }) {
    const Response = await baseAPI.post("/api/to-do/", data);
    return Response.data as CreateTodoResponse;
  },
  async update(data: { id: string; title: string; description: string }) {
    const Response = await baseAPI.patch(`/api/to-do/${data.id}`, {
      title: data.title,
      description: data.description,
    });
    return Response.data as UpdateTodoResponse;
  },
  async delete(id: string) {
    const Response = await baseAPI.delete(`/api/to-do/${id}`);
    return Response.data as DeleteTodoResponse;
  },
  async changeStatus(id: string) {
    const Response = await baseAPI.put(`/api/to-do/${id}`);
    return Response.data as Todo;
  },
  async getTodos() {
    const Response = await baseAPI.get("/api/to-do/");
    return Response.data as Todo[];
  },
  async searchByTitle(title: string) {
    const Response = await baseAPI.get(
      `/api/to-do/search?title=${encodeURIComponent(title)}`
    );
    return Response.data as Todo[];
  },

  async addDeadline(id: string, date: string) {
    console.log(id, date);
    const Response = await baseAPI.patch(`/api/to-do/add-deadline/${id}`, {
      date: date,
    });
    return Response.data as Todo;
  },
};
