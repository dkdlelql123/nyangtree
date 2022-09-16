import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./feature/Main";
import Login from "./feature/Login";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <h1>마옹</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
