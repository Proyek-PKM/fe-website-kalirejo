import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./components/LandingLayout";
import Landing from "./pages/Landing/Landing";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
