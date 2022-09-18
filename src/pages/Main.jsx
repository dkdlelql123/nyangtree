import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [test, SetTest] = useState("ㅋ");

  return (
    <div>
      <img src="/img/nyang.png" alt="고양이이미지" title="냥트리" />
      <h1>마 옹{test}</h1>
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
