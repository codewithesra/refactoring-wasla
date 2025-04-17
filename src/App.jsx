import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./components/4_template/StudentForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
