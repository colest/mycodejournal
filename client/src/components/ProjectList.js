import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Item } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../actions/projectActions';

export default () => {
    const projects = useSelector(state => state.project.projects);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch])

    
    return (

        <Item.Group>
            {projects.map(project => (
            <Item key={project._id}>
                <Item.Image size="small" src={project.thumbnail} />
                <Item.Content>
                    <Item.Header><Link to={`/project/${project._id}`}>{project.title}</Link></Item.Header>
                    <Item.Meta>{project.status}</Item.Meta>
                    <Item.Description>{project.description}</Item.Description>
                </Item.Content>
            </Item>
            ))}    
        </Item.Group>




    )

}