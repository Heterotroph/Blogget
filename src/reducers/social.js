import {
    SOCIAL_DATA_REQUEST,
    SOCIAL_DATA_SUCCESS,
    SOCIAL_DATA_FAIL,
    SERVICE_YOUTUBE
} from '../actions/SocialActions'

const initialState = {
    availableServices: [SERVICE_YOUTUBE],
    serviceKey: SERVICE_YOUTUBE,
    view: {
        pageRequested: 0,
        page: 0,
        aside: 'special'
    },
    statistics: null,
    special: null,
    error: null,
}

export function socialReducer(state = initialState, action) {
    switch (action.type) {
        case SOCIAL_DATA_REQUEST:
            return { ...state, view: { ...state.view, ...action.view } }

        case SOCIAL_DATA_SUCCESS:
            return { ...state, statistics: action.statistics, view: { ...state.view, ...action.view } }

        case SOCIAL_DATA_FAIL:
            return { ...state, error: action.error }

        default:
            return state
    }
}