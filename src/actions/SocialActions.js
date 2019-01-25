export const SOCIAL_DATA_REQUEST = 'DATA_REQUEST';
export const SOCIAL_DATA_SUCCESS = 'DATA_SUCCESS';
export const SOCIAL_DATA_FAIL = 'DATA_FAIL';

export const SERVICE_YOUTUBE = 'youtube';

export const servicesMap = {
  [SERVICE_YOUTUBE]: {
    statistics: requestYoutubeStatistics,
    special: requestYoutubeSpecial
  }
}

export function requestStatisticsAction(serviceKey, extra) {
  console.log('requestStatisticsAction ' + serviceKey + ' ' + extra);
  return function(dispatch) {
    console.log('requestStatisticsAction#anonimus ' + serviceKey + ' ' + extra);
    dispatch({ type: SOCIAL_DATA_REQUEST });
    servicesMap[serviceKey].statistics();
  }
}

export function requestSpecialAction(serviceKey) {
  console.log('requestSpecialAction ' + serviceKey);
  return function(dispatch) {
    console.log('requestSpecialAction#anonimus ' + serviceKey);
    dispatch({ type: SOCIAL_DATA_REQUEST });
    servicesMap[serviceKey].special();
  }
}

function requestYoutubeStatistics() {
    
}

function requestYoutubeSpecial() {
    
}