export const SOCIAL_DATA_REQUEST = "SOCIAL_DATA_REQUEST";
export const SOCIAL_DATA_SUCCESS = "SOCIAL_DATA_SUCCESS";
export const SOCIAL_DATA_FAIL = "SOCIAL_DATA_FAIL";

export const SERVICE_YOUTUBE = "youtube";

export const servicesMap = {
  [SERVICE_YOUTUBE]: {
    statistics: requestYoutubeStatistics,
    special: requestYoutubeSpecial
  }
};

export function requestStatisticsAction(serviceKey, extra) {
  return function(dispatch) {
    dispatch({ type: SOCIAL_DATA_REQUEST });
    servicesMap[serviceKey].statistics(dispatch, extra);
  };
}

export function requestSpecialAction(serviceKey) {
  return function(dispatch) {
    dispatch({ type: SOCIAL_DATA_REQUEST });
    servicesMap[serviceKey].special(dispatch);
  };
}

function requestYoutubeStatistics(dispatch, extra) {
  const { page = 1 } = extra;
  fetch(`http://92.53.65.165:8000/channels/?page=${page}`)
    .then(response => {
      if (response.status !== 200) {
        dispatch({
          type: SOCIAL_DATA_FAIL,
        })
        return;
      }
      response.json().then(data => {
        dispatch({
          type: SOCIAL_DATA_SUCCESS,
          statistics: data
        });
      });
    })
    .catch(err => dispatch({
      type: SOCIAL_DATA_FAIL,
      error: err
    }));
}

function requestYoutubeSpecial(dispatch) {}
