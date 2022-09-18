//axios를 사용해 spring boot api와 데이터통신 담당할 모듈인 service 구현하는 파트
import axios from "axios";

const BOARD_API_BASE_URL = "http://localhost:8080/api/get";

class TestService {
  getBoards() {
    return axios.get(BOARD_API_BASE_URL);
  }
}

export default new TestService();
