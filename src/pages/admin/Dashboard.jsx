import { useEffect } from "react";
import TestService from "../../server/TestService";

function Dashboard() {
  useEffect(() => {
    TestService.getMember().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>아이디</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>이메일</th>
            <th>가입날짜</th>
            <th>탈퇴여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>번호</td>
            <td>아이디</td>
            <td>이름</td>
            <td>닉네임</td>
            <td>이메일</td>
            <td>가입날짜</td>
            <td>탈퇴여부</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Dashboard;
