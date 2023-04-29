import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Routers from "./components/Routers";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routers />
    </div>
  );
}

function Home() {
  return <Navbar />;
}
export default App;
