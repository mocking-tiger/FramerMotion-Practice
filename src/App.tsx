import AnimatePresenceComponent from "./pages/AnimatePresence";
import AnimatePresenceComponent2 from "./pages/AnimatePresence2";
import Gestures from "./pages/Gestures";
import Gestures2 from "./pages/Gestures2";
import Home from "./pages/Home";
import MotionValue from "./pages/MotionValue";
import MotionValue2 from "./pages/MotionValue2";
import SvgAnimation from "./pages/SvgAnimation";
import Layout from "./pages/Layout";
import VariantsBasic from "./pages/VariantsBasic";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/variants-basic" element={<VariantsBasic />} />
        <Route path="/gestures" element={<Gestures />} />
        <Route path="/gestures2" element={<Gestures2 />} />
        <Route path="/motion-value" element={<MotionValue />} />
        <Route path="/motion-value2" element={<MotionValue2 />} />
        <Route path="/svg" element={<SvgAnimation />} />
        <Route
          path="/animate-presence"
          element={<AnimatePresenceComponent />}
        />
        <Route
          path="/animate-presence2"
          element={<AnimatePresenceComponent2 />}
        />
        <Route path="/layout-animation" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
