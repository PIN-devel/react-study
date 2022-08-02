import { rest } from "msw";

const todos = [
  { id: 1, title: "할일1" },
  { id: 2, title: "할일2" },
  { id: 3, title: "할일3" },
  { id: 4, title: "할일4" },
  { id: 5, title: "할일5" },
  { id: 6, title: "할일6" },
];

export const handlers = [
  rest.get("/todos", async (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.post("/todos", async (req, res, ctx) => {
    const { todo } = req.body;
    todos.push(todo);
    return res(ctx.json(true));
  }),
];
