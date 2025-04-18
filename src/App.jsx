import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/4_templates/Singup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
