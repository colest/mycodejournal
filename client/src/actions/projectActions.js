import { GET_PROJECTS, GET_PROJECT_DETAILS, CREATE_PROJECT, PROJECTS_LOADING } from './types';
import axios from 'axios';

export const getProjects = () => dispatch => {
    dispatch(setProjectsLoading());
    axios
        .get('/api/projects')
        .then(res => 
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            }));
};

export const getProjectDetails = projectId => dispatch => {
    console.log('Project Details Action Accessed')
    console.log(projectId)
    axios
        .get(`/api/projects/${projectId}`)
        .then(res =>
            dispatch({
                type: GET_PROJECT_DETAILS,
                payload: res.data
            }));
}

export const createProject = project => dispatch => {
    axios
        .post('/api/projects', project)
        .then(res => dispatch({
            type: CREATE_PROJECT,
            payload: res.data
        }));
}

export const setProjectsLoading = () => {
    return {
        type: PROJECTS_LOADING
    }
}