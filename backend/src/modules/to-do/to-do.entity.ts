import mongoose, { Document, Schema } from "mongoose";

export interface IToDo extends Document {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  deadline: string;
  // tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ToDoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      length: 3,
    },
    description: {
      type: String,
      default: "",
    },
    done: {
      type: Boolean,
      default: false,
    },
    deadline: {
      type: String,
      default: null,
    },
    // tags: {
    //   type: [String],
    //   default: null,
    // },
  },
  {
    timestamps: true,
  }
);

export const ToDoModel = mongoose.model<IToDo>("ToDo", ToDoSchema);
