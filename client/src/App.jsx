import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

function Home() {
  return <Navbar />;
}
export default App;
