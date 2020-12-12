import { GET_PROJECTS, CREATE_PROJECT, PROJECTS_LOADING } from '../actions/types';

const initialState = {
    projects: [],
    loading: false
}

export default function(state = initialState, { type, payload }) {
    switch(type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: payload,
                loading: false
            }
        case CREATE_PROJECT:
            return {
                ...state,
                projects: [payload, ...state.projects]
            }

        case PROJECTS_LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return state;
    }
}