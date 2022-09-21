// 아쉽게도 작동안됌
// 이유는 계속 찾아봐야겠다 ㅠㅠ

// module import -> npm install http-proxy-middleware
// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

// 요청 : /api/**
// 실제 : http://localhost:8080/api/**
const apiUrl = 'http://localhost:8080';
const apiContext = ['/api'];

module.exports = (app) => {
	app.use(
		createProxyMiddleware(apiContext, {
			target: apiUrl,  // 비즈니스 서버 URL 설정
			changeOrigin: true,
		})
	);
};