import { Link } from "react-router-dom";

function Join() {
  return (
    <div>
      <h1>login</h1>
      <form action="">
        <input type="text" id="memberId" placeholder="ID" />
        <input type="password" id="memberPw" placeholder="pw" />
        <input type="password" id="memberPw2" placeholder="pw 재확인" />
        <input type="text" id="name" placeholder="이름" />
        <input type="text" id="nickname" placeholder="별명" />
        <input type="text" id="email" placeholder="email" />
        <input type="text" id="phone" placeholder="phone" />
        <button>회원가입</button>
      </form>
    </div>
  );
}

export default Join;
