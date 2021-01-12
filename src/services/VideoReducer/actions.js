import {GET_VIDEOS} from "./actionsTypes";

export const getVideos = () => async dispatch => {
  try {
  const dirtydata = await fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({query: `{
      getVideos {
        title
        id
        date
        duration
        views
        author {
          id
          name
        }
      }
    }`})
  });
  const data = await dirtydata.json();
    console.log(data)
  dispatch({
    type: GET_VIDEOS,
    payload: data.data.getVideos
  });
} catch (err) {
  console.error(err);
}
};
