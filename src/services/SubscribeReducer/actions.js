import {GET_SUBSCRIPTIONS, GET_SUBSCRIPTIONS_ALL} from "./actionsTypes";

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

export const getSubscriptionsAll = (token, cb) => async dispatch => {
  try {
  const response = await fetch('http://localhost:5000/user/subscriptions/getAll', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  });
  const log = await response.json();
  cb();
  dispatch({
    type: GET_SUBSCRIPTIONS_ALL,
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

export const unsubscribe = async (token, id) => {
  try {
  const response = await fetch(`http://localhost:5000/user/subscriptions/unsubscribe/${id}`, {
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
