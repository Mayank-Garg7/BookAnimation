import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CBT1 from "./pages/CBT1";
import CBT2 from "./pages/CBT2";
import SubjectPage from "./pages/SubjectPage";
import TopicPage from "./pages/TopicPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cbt1" element={<CBT1 />} />
        <Route path="/cbt2" element={<CBT2 />} />

        <Route
          path="/:exam/:subject"
          element={<SubjectPage />}
        />

        <Route
          path="/:exam/:subject/:topic"
          element={<TopicPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;