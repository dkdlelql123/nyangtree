import { Routes, Route } from "react-router-dom";
import { Main, Login, Join } from "../pages/index";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
    </Routes>
  );
}

export default App;
