import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DateFnsExample from "./components/DateFnsExample";
import DayJsExample from "./components/DayJsExample";
import MomentExample from "./components/MomentExample";
import ReactQueryExample from "./components/ReactQueryExample";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SwrExample from "./components/SwrExample";
import MemoizationExample from "./components/Memoization/Memoization";
import Example from "./components/Context/Example";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      {/* <MomentExample />
      <DayJsExample />
      <DateFnsExample /> */}
      {/* <SwrExample /> */}
      {/* <QueryClientProvider client={queryClient}>
        <ReactQueryExample />
        <ReactQueryDevtools />
      </QueryClientProvider> */}
      {/* <MemoizationExample /> */}
      <Example />
    </div>
  );
}

export default App;
