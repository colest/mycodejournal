import React, { useEffect, useState, useLayoutEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectDetails, updateProject } from '../actions/projectActions';
import { Image, Grid, Button, Modal, Form, Input, Select, TextArea } from 'semantic-ui-react';

export default () => {
    const activeProject = useSelector(state => state.project.activeProject);
    const dispatch = useDispatch();
    const statusOptions = [
        { key: 'a', text: 'Active', value: 'Active'},
        { key: 'Not Yet Started', text: 'Not Yet Started', value: 'Not Yet Started'},
        { key: 'o', text: 'On Hold', value: 'On Hold'},
        { key: 'r', text: 'Retired', value: 'Retired'},
    ];
    let { id } = useParams();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [status, setStatus] = useState('');
    const [repo, setRepo] = useState('');
    const [deployment, setDeployment] = useState('');

    useLayoutEffect(() => {
        dispatch(getProjectDetails(id));
    }, [dispatch])

    const handleSubmit = () => { 
        let project = {
            id,
            title,
            description,
            status,
            thumbnail,
            deployment,
            repo
        }
   
           dispatch(updateProject(project))
           console.log(project)
           console.log('submit done')
        }
    
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
                            <Modal
                            onClose={() => setOpen(false)}
                            onOpen={() => {
                                setTitle(activeProject[0].title)
                                setDescription(activeProject[0].description)
                                setDeployment(activeProject[0].deployment)
                                setRepo(activeProject[0].repo)
                                setThumbnail(activeProject[0].thumbnail)
                                setStatus(activeProject[0].status)
                                setOpen(true)}}
                            onSubmit={e => handleSubmit(e)}
                            open={open}
                            trigger={<Button>Edit</Button>}
                            as={Form}
                            >
                                <Modal.Header>Update Project Information</Modal.Header>
                                <Modal.Content>
                                    <Form.Group widths='equal'>
                                        <Form.Field
                                            control={Input}
                                            label="Project Name"
                                            
                                            name="title"
                                            defaultValue={activeProject[0].title}
                                            onChange={e =>  setTitle(e.target.value)}
                                        />
                                        <Form.Field
                                            control={Select}
                                            options={statusOptions}
                                            label={{ children: "Status", htmlFor: 'status-select'}}
                                            defaultValue={activeProject[0].status}
                                            search
                                            searchInput={{ id: 'status-select'}}
                                            name="status"
                                            onChange={e => {
                                                console.log(e)
                                                setStatus(e.target.textContent)
                                                
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Field
                                        control={TextArea}
                                        label="Description"
                                        defaultValue={activeProject[0].description}
                                        name="description"
                                        onChange={e => setDescription(e.target.value)}
                                    />
                                    <Form.Field
                                        control={Input}
                                        label="Thumbnail"
                                        defaultValue={activeProject[0].thumbnail}
                                        name="thumbnail"
                                        onChange={e => setThumbnail(e.target.value)}
                                    />
                                    <Form.Field
                                        control={Input}
                                        label="Deployment Link"
                                        placeholder="If not deployed, leave blank"
                                        defaultValue={activeProject[0].deployment}
                                        name="deployment"
                                        onChange={e => setDeployment(e.target.value)}
                                    />
                                    <Form.Field
                                        control={Input}
                                        label="Repository"
                                        placeholder="If no repository, leave blank"
                                        defaultValue={activeProject[0].repo}
                                        name="repo"
                                        onChange={e => setRepo(e.target.value)}
                                    />
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button
                                        color='blue'
                                        onClick={() => {
                                            setOpen(false)
                                            handleSubmit()
                                        }}
                                        type="button"
                                    >Update</Button>
                                    <Button color='black' onClick={() => setOpen(false)}>Cancel</Button> 
                                    </Modal.Actions>                                
                                </Modal>
                                
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