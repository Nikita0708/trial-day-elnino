import { Request } from "express";

export interface TodoBodyCreate extends Request {
  body: {
    title: string;
    description: string;
  };
}

export interface TodoBodyUpdate extends Request {
  body: {
    _id: string;
    title: string;
    description: string;
  };
}

export interface TodoWithParams extends Request {
  params: {
    id: string;
  };
}

export interface TodoWithQuery extends Request {
  query: {
    title: string;
  };
}

export interface TodoAddDeadline extends Request {
  params: {
    id: string;
  };
  body: {
    date: string;
  };
}
