import { GET_PROJECTS, GET_PROJECT_DETAILS, CREATE_PROJECT, PROJECTS_LOADING } from '../actions/types';

const initialState = {
    projects: [],
    activeProject: [],
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
        case GET_PROJECT_DETAILS:
            console.log(payload._id)
            console.log(state.projects)
            return {
                ...state,
                activeProject: [payload]
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