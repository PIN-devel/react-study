import axios from "axios";

export const getTodo = () => axios.get("/todos").then((res) => res.data);

export const postTodo = (todo) =>
  axios.post("/todos", { todo }).then((res) => res.data);
