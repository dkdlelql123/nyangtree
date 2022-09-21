//axios를 사용해 spring boot api와 데이터통신 담당할 모듈인 service 구현하는 파트
import axios from "axios";

const MEMBER_API_BASE_URL = "http://localhost:8080/api/member/list";

class TestService {
  getMember() {
    return axios.get(MEMBER_API_BASE_URL);
  }
}

// useEffect(() => {
//   // const response = axios.get("http://localhost:8080/api/hello");
//   // console.log(response);

//   // IE에서 axios 통신 결과 캐싱되는 현상 방지
//   axios.defaults.headers.common = {
//     Pragma: "no-cache",
//   };

//   axios.get("/api/hello").then((response) => {
//     console.log(response);
//   });
// }, []);

// fetch("http://localhost:8080/api/hello")
// .then((response) => {
//   console.log(response);
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error("Network response was not ok.");
// })
// .then((data) => {
//   console.log(JSON.stringify(data));
// })
// .catch((error) => {
//   console.log(`error: ${error}`);
// });

export default new TestService();
