import {GET_SUBSCRIPTIONS} from "./actionsTypes";

export const getSubscriptions = (token) => dispatch => {
  const result = [];
  dispatch({
    type: GET_SUBSCRIPTIONS,
    payload: result
  });
}
