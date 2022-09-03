import React, { useEffect } from "react";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { getTodo, postTodo } from "../api/fetcher";

export default function ReactQueryExample() {
  return (
    <>
      <Example />
    </>
  );
}

function Example() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(["todos"], getTodo);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.map((todo) => (
        <ul key={todo.id}>
          <li>{todo.title}</li>
        </ul>
      ))}
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "learn React",
          });
        }}
      >
        Add
      </button>
    </div>
  );
}
