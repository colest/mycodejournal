import { GET_PROJECTS, PROJECTS_LOADING } from './types';
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

export const setProjectsLoading = () => {
    return {
        type: PROJECTS_LOADING
    }
}