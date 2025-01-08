import Home from "./pages/Home";
import VariantsBasic from "./pages/VariantsBasic";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/variants-basic" element={<VariantsBasic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
