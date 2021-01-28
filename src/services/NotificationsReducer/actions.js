import {GET_NOTIFICATIONS} from "./actionsTypes";

export const getNotifications = (token) => dispatch => {
  const result = [];

  dispatch({
    type:GET_NOTIFICATIONS,
    payload: result
  })
}
