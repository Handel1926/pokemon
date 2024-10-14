import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Details from "./pages/Details";
import User from "./ui/UserContext";
import Caught from "./ui/Caught";
import Red from "./pages/Red";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <User>
          <Routes>
            <Route path="/" element={<Red />} />
            <Route path="/login" element={<Login />} />
            <Route element={<AppLayout />}>
              <Route path="/home" index element={<Home />} />
              <Route path="/pokemon/details/:id" element={<Details />} />
              <Route path="/pokemon/caught" element={<Caught />} />
            </Route>
          </Routes>
        </User>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
