import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <div>
        {" "}
        <BrowserRouter>
          <h1>React-Router-MultiPageApp</h1>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
