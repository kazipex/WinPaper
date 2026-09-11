import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ height: "90px" }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
