import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectDetails } from '../actions/projectActions';
import { Image, Grid, Button } from 'semantic-ui-react';



export default () => {
    const activeProject = useSelector(state => state.project.activeProject);
    const dispatch = useDispatch();
    let { id } = useParams();
    

    useEffect(() => {
        dispatch(getProjectDetails(id));
    }, [dispatch])

    return (
        <div>
            
            {activeProject.map(project => (
                <div key={project._id}>
                    <h2>{project.title}</h2>
                    <Grid>
                        <Grid.Column width={5}>
                            <Image src={project.thumbnail}/>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <p>{project.description}</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Button.Group vertical>
                                <Button>Edit</Button>
                                <Button href={project.repo} target='_blank'>Repo</Button>
                                <Button href={project.deployment} target='_blank'>Deployment</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid>
                    
                </div>
            ))}
        </div>
    )
}