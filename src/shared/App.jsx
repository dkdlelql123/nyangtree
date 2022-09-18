import { Routes, Route } from "react-router-dom";
import { Main, Login, Join, Lists, Detail } from "../pages/index";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/article/list" element={<Lists />}></Route>
        <Route path="/article/add" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
