import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>login</h1>
      <form action="">
        <input type="text" id="memberId" placeholder="ID" />
        <input type="password" id="memberPw" placeholder="pw" />
        <button>로그인</button>
      </form>

      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <Link to="/join">회원가입</Link>
        </li>
        {/* <li>
          <Link to="/findMember">계정찾기</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Login;
