import {GET_VIDEOS, GET_VIDEO, SEARCH_VIDEO, SEARCH_VIDEO_SHORT, CLEAR} from "./actionsTypes";


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

export const clear = () => {
  return {
    type: CLEAR
  }
};

export const searchVideoShort = (search) => async (dispatch) => {
  const dirtyshort = await fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({query: `{
      searchVideo(search: "${search}") {
        title
        id
        author {
            name
        }
      }
    }`})
  });
  const short = await dirtyshort.json();
  dispatch({
    type: SEARCH_VIDEO_SHORT,
    payload: short.data.searchVideo
  })
};

export const searchVideo = (search) => async (dispatch) => {
  const dirtysearch = await fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({query: `{
      searchVideo(search: "${search}") {
        title
        duration
        id
        views
        date
        description
        author {
            name
            id
        }
      }
    }`})
  });
  const cleansearch = await dirtysearch.json();
  dispatch({
    type: SEARCH_VIDEO,
    payload: cleansearch.data.searchVideo
  })
}
