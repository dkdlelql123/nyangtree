import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [test, SetTest] = useState("๐");

  return (
    <div>
      <img src="/img/nyang.png" alt="๊ณ ์์ด์ด๋ฏธ์ง" title="๋ฅํธ๋ฆฌ" />
      <h1>
        {test}๋ง ์น{test}
      </h1>
      <ul>
        <li>
          <Link to="/login">๋ก๊ทธ์ธ</Link>
        </li>
        <li>
          <Link to="/join">ํ์๊ฐ์</Link>
        </li>
      </ul>
    </div>
  );
}
export default Main;
