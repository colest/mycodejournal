import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import NewProjectModal from '../components/NewProjectModal';

export default class MenuExampleInverted extends Component {
  // state = { activeItem: 'Project List' }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item>
          <Link to='/'>Project List</Link></Menu.Item>
        <Menu.Item
          name='create new project'

        ><a style={{cursor: "pointer"}}><NewProjectModal/></a></Menu.Item>
        <Menu.Item
          name='about'
 
        />

        <Menu.Menu position='right'>
            <Menu.Item>Sign Up</Menu.Item>
            <Menu.Item>Login</Menu.Item>
            <Menu.Item>Logout</Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}