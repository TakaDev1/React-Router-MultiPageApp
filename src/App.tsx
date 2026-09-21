import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-800 justify-center">
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
