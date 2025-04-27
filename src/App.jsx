// src/App.js
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignupPage from "./components/5_pages/SignupPage";
import ToasterNotif from "./utils/ToasterNotif";
import LandingPage from "./components/5_pages/LandingPage";
import DarkModeToggle from "./components/1_atoms/DarkMode";
import UserRolePage from "./components/5_pages/UserRolePage";
import Loader from "./utils/Loader";
import useLoading from "./hooks/UseLoading";

function App() {
  const { loading, fadeIn } = useLoading(3000);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToasterNotif />
        <DarkModeToggle />

        {loading && <Loader />}

        <div
          className={`transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/userRole" element={<UserRolePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
