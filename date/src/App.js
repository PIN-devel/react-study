import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DateFnsExample from "./components/DateFnsExample";
import DayJsExample from "./components/DayJsExample";
import MomentExample from "./components/MomentExample";
import ReactQueryExample from "./components/ReactQueryExample";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      {/* <MomentExample />
      <DayJsExample />
      <DateFnsExample /> */}
      <QueryClientProvider client={queryClient}>
        <ReactQueryExample />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
