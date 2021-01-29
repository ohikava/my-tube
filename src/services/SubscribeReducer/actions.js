import {GET_SUBSCRIPTIONS} from "./actionsTypes";

export const getSubscriptions = (token) => async dispatch => {
  try {
  const response = await fetch('http://localhost:5000/user/subscriptions/getShort', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  });
  const log = await response.json();

  dispatch({
    type: GET_SUBSCRIPTIONS,
    payload: log.subs
  });
} catch (err) {
  console.error(err);
}
}

export const subscribe = async (token, id) => {
  try {
  const response = await fetch(`http://localhost:5000/user/subscriptions/subscribe/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  });
  const log = await response.json();
  console.log(log);
} catch (err) {
  console.error(err);
}
}
