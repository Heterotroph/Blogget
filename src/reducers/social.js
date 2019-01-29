import {
    SOCIAL_DATA_REQUEST,
    SOCIAL_DATA_SUCCESS,
    SOCIAL_DATA_FAIL,
    SERVICE_YOUTUBE
} from '../actions/SocialActions'

const initialState = {
    availableServices: [SERVICE_YOUTUBE],
    serviceKey: SERVICE_YOUTUBE,
    statistics: null,
    special: null,
    error: null,
}

export function socialReducer(state = initialState, action) {
    switch (action.type) {
        case SOCIAL_DATA_REQUEST:
            return { ...state }

        case SOCIAL_DATA_SUCCESS:
            return { ...state, statistics: action.statistics }

        case SOCIAL_DATA_FAIL:
            return { ...state, error: action.error }

        default:
            return state
    }
}