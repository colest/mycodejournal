import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectDetails } from '../actions/projectActions';
import { useParams } from 'react-router-dom';

export default () => {
    const activeProject = useSelector(state => state.project.activeProject);
    const dispatch = useDispatch();
    
    let projectId = useParams();
    
        useEffect(() => {
        dispatch(getProjectDetails(projectId));
    }, [dispatch])
    return(
        <div>
            <h1>Project Detail Page</h1>
            {activeProject.map(project => (
                <div key={project._id}>
                    <h3>{project.title}</h3>
                </div>    
            ))}
        </div>
    )
}