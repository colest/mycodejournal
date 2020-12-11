import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'Project List' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='project list'
          active={activeItem === 'project list'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='create new project'
          active={activeItem === 'create new project'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
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