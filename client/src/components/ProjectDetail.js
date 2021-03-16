import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectDetails } from '../actions/projectActions';
import { useParams } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import ProjectInfo from '../components/ProjectInfo'
import ProjectTasks from '../components/ProjectTasks'
import ProjectComments from '../components/ProjectComments'

export default () => {
    const activeProject = useSelector(state => state.project.activeProject);
    const dispatch = useDispatch();
    
    let projectId = useParams();
    
        useEffect(() => {
        dispatch(getProjectDetails(projectId));
    }, [dispatch])

    return(
        <div className="project-details">
            <Segment>
                <ProjectInfo/>
            </Segment>
            <Segment>
                <ProjectTasks/>
            </Segment>
            <Segment>
                <ProjectComments/>
            </Segment>  
        </div>
    )
}