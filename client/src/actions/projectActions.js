import { GET_PROJECTS, CREATE_PROJECT, PROJECTS_LOADING } from './types';
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


export const createProject = project => dispatch => {
    console.log('we be actioning')
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