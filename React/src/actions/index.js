import axios from 'axios';

export const FETCH_COURSE = 'fetch_course';
export const CHECK_AUTH = 'check_auth';
export const LOGIN = 'login';
export const CREATE_POST = 'create_post';

const ROOT_URL = '/lms/json/learning/listTeacherResource';

// export function fetchCourse(id) {
//   const request = axios.get(`${ROOT_URL}?courseId=${id}`).then(res => {
//     console.log('res', res);
//   });
//   console.log('data', request);
//   return {
//     type: FETCH_COURSE,
//     payload: request
//   };
// }
export const fetchCourse = id => async dispatch => {
  const res = await axios.get(`${ROOT_URL}?courseId=${id}`);
  console.log('fecthCourse', res);
  return dispatch({
    type: FETCH_COURSE,
    payload: res.data
  });
};

export const checkAuth = () => {
  return {
    type: CHECK_AUTH,
    payload: 'asd'
  };
};

export const login = () => async dispatch => {
  const res = await axios.get(`/lms/htmlLogin`);
  console.log('login', res);
  return dispatch({
    type: LOGIN,
    payload: res.data
  });
};
