import {REGISTER, LOGIN, CLEAR} from "./actionsTypes";

export const register = (data) => async dispatch => {
  try {
  const response = await fetch('http://localhost:5000/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.log(result)
  dispatch({
    type: REGISTER,
    payload: result
  });

} catch (err) {
  console.error(err);
}
};

export const clear = () => {
  return {
    type: CLEAR
  }
};

export const login = (data) => async dispatch => {
  try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      dispatch({
        type: LOGIN,
        payload: result
      })
  } catch (err) {
      console.error(err);
  }
}
