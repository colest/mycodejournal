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
            console.log('reducer payload id', payload._id)
            console.log(payload)
            console.log('reducer state.activeProject ', state.activeProject)
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