import { GET_PROJECTS, PROJECTS_LOADING } from '../actions/types';

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
        case PROJECTS_LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return state;
    }
}