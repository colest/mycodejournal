import React, { useState } from 'react';
import { Button, Form, Modal, TextArea, Input, Select } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { createProject } from '../actions/projectActions';

export default () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const statusOptions = [
        { key: 'a', text: 'Active', value: 'Active'},
        { key: 'Not Yet Started', text: 'Not Yet Started', value: 'Not Yet Started'},
        { key: 'o', text: 'On Hold', value: 'On Hold'},
        { key: 'r', text: 'Retired', value: 'Retired'},
    ]
    // const [project, setProject] = useState({
    //     title: '',
    //     description: '',
    //     thumbnail: '',
    //     status: '',
    //     repo: '',
    //     deployment: ''
    // })
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [status, setStatus] = useState('');
    const [repo, setRepo] = useState('');
    const [deployment, setDeployment] = useState('');

    console.log(status)
    const handleSubmit = ()=> {
        const project = {
            title,
            description,
            status,
            thumbnail,
            deployment,
            repo
        }
        dispatch(createProject(project));
        
        console.log('You Submitted')
    }
    return (
        <Modal
        as={Form}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        onSubmit={e => handleSubmit(e)}
        open={open}
        trigger={<Button color='black'>Create New Project</Button>}
        >
            <Modal.Header>Create a New Project</Modal.Header>
            <Modal.Content>
              
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label="Project Name"
                            placeholder="Name of your project"
                            name="title"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Form.Field
                            control={Select}
                            options={statusOptions}
                            label={{ children: "Status", htmlFor: 'status-select'}}
                            placeholder="Status"
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
                        placeholder="Describe your project"
                        name="description"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Form.Field
                        control={Input}
                        label="Thumbnail"
                        placeholder="Pretty picture!"
                        name="thumbnail"
                        onChange={e => setThumbnail(e.target.value)}
                    />
                    <Form.Field
                        control={Input}
                        label="Deployment Link"
                        placeholder="If not deployed, leave blank"
                        name="deployment"
                        onChange={e => setDeployment(e.target.value)}
                    />
                    <Form.Field
                        control={Input}
                        label="Repository"
                        placeholder="If no repository, leave blank"
                        name="repo"
                        onChange={e => setRepo(e.target.value)}
                    />
          

            </Modal.Content>
            <Modal.Actions>

                <Button
                    color='red'
                    onClick={() => {
                        setOpen(false)
                        handleSubmit()
                    }}
                    type="button"
                >Create</Button>
                <Button color='black' onClick={() => setOpen(false)}>Cancel</Button> 
            </Modal.Actions>

        </Modal>
    )
}
