import {GET_VIDEOS, GET_VIDEO} from "./actionsTypes";

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

export const getVideo = (id) => async dispatch => {
  try {
    const dirtydata = await fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({query: `{
            getVideo(id: "${id}") {
              title
                id
                likes
                dislikes
                views
                keywords
                author {
                name
                id
                followers
            }
        }
      }`})
    });
    const data = await dirtydata.json();
    const video = data.data.getVideo;
    const keys = [...video.keywords];
    const dirtyrecommendations = await fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({query: `{
        getRecommendations(keys: "${keys}") {
            title
            id
            views
            duration
            author {
              name
              id
    }
}
      }`})
    });
    const recommendations = await dirtyrecommendations.json();
    video.recommendations = recommendations.data.getRecommendations;

    dispatch({
      type: GET_VIDEO,
      payload: video
    });
  } catch (error) {
    console.error(error);
  }
};
