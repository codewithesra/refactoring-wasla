import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignupPage from "./components/5_pages/SignupPage";
import { useEffect } from "react";

function App() {
  const queryClient = new QueryClient();
  useEffect(() => {
    document.documentElement.style.transition = "";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
