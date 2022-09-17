import { Link } from "react-router-dom";
// import logo from "/react.svg";

function Main() {
  return (
    <div>
      <img src="/img/nyang.png" />
      <h1>마 옹</h1>
      <ul>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/join">회원가입</Link>
        </li>
      </ul>
    </div>
  );
}

export default Main;
