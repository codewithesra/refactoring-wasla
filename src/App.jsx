import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignupPage from "./components/5_pages/SignupPage";
import ToasterNotif from "./utils/ToasterNotif";
import LandingPage from "./components/5_pages/LandingPage";
import DarkModeToggle from "./components/1_atoms/DarkMode";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToasterNotif />
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
