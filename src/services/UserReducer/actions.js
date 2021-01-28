import {LOGIN} from "./actionsTypes";

export const register = (email, name, password, password2, cb) => async dispatch => {
  try {
  const response = await fetch('http://localhost:5000/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({email, password, name, password2})
  });
  const result = await response.json();

  if(result.type === 'error') {
    cb(result.code);
    return;
  };

  dispatch({
    type: LOGIN,
    payload: result
  });

} catch (err) {
  console.error(err);
}
};

export const login = (email, password, cb) => async dispatch => {
  try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({email, password})
      });

      const result = await response.json();
      if(result.type === 'error') {
        cb(result.code);
        return;
      }

      dispatch({
        type: LOGIN,
        payload: result
      })
  } catch (err) {
      console.error(err);
  }
}
