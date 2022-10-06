import axios from 'axios';

const client = axios.create({
  // baseURL: 'http://49.173.95.241:14242/api',
  // baseURL: 'http://127.0.0.1:8000/api',
  baseURL: 'https://j7e103.p.ssafy.io/api',
  // baseURL: 'http://127.0.0.1:8000/api',
  // baseURL: 'http://49.173.95.241:14242/api',
  // baseURL: 'http://127.0.0.1:8000/api',
  // baseURL: 'https://j7e103.p.ssafy.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const token = sessionStorage.getItem('Token')
  ? sessionStorage.getItem('Token')
  : null;
if (token) {
  client.defaults.headers.common['Authorization'] = `Token ${token}`;
}

// 요청 인터셉터 추가하기
client.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem('Token')
      ? sessionStorage.getItem('Token')
      : null;
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가하기
client.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    // if (error.response && error.response.status === 401) {
    //   const token = sessionStorage.getItem('Token')
    //     ? sessionStorage.getItem('Token')
    //     : null;
    //   if (token) {
    //     client.defaults.headers.common['Authorization'] = `Token ${token}`;
    //     return client.request(error.config);
    //   }
    // }
    return Promise.reject(error);
  },
);

export default client;
