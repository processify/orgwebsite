import React from 'react'
import {
  Container,
  Menu,
  Icon
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';



const Layout = (props) => {
  

  return(
  <div >
    <Menu  stackable  inverted  color='teal'>
      <Container className='mt-3'>
        <Menu.Item  header>
          {/*<Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />*/}
          <Icon name='cogs' size='big'/>
          Processify
        </Menu.Item>
        
        <Menu.Item position='right'>
        <Link to='/'>
        <Icon name='home' size='big' />
        Home
        </Link>
        </Menu.Item>

        <Menu.Item >
        <Link to='/objective'>
        <Icon name='align justify' size='big'/>
         Value
         </Link>
        </Menu.Item>

        <Menu.Item >
        <Link to='/howitworks'>
        <Icon name='mail' size='big'/>
        How It Works
        </Link>
        </Menu.Item>

        <Menu.Item >
        <Link to='/leancanvas'>
        <Icon name='align justify' size='big'/>
         Lean Canvas
         </Link>
        </Menu.Item>

        <Menu.Item >
        <Icon name='log out' size='big'/>
        Demo
        </Menu.Item>
      </Container>
    </Menu>

    {props.children}

    
  </div>
  )
        }

export default Layout