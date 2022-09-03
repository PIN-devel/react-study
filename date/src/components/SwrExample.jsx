import axios from "axios";
import React from "react";
import useSWR from "swr";

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function SwrExample() {
  const { user, isLoading, isError } = useUser("123");
  if (isLoading) return "loading";
  if (isError) return "error";
  return <div>{user.name}</div>;
}
