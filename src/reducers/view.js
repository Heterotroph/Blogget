import {
    ASIDE_MODE_CHANGE
} from '../actions/ViewActions'

import {
    SOCIAL_DATA_REQUEST,
    SOCIAL_DATA_SUCCESS
} from '../actions/SocialActions'

const initialState = {
    pageRequested: 0,
    page: 0,
    aside: {
        mode: 'special', //or 'card'
        extra: null
    }
}

export function viewReducer(state = initialState, action) {
    switch (action.type) {
        case SOCIAL_DATA_REQUEST:
            return { ...state, ...action.view }

        case SOCIAL_DATA_SUCCESS:
            return { ...state, ...action.view }

        case ASIDE_MODE_CHANGE:
            return { ...state, aside: action.aside }

        default:
            return state
    }
}