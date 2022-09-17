import { BrowserRouter } from "react-router-dom";
import App from "../shared/App";
import "../app.css";

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
