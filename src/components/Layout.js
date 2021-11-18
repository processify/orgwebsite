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
        <Icon name='book' size='big'/>
         Stories
         </Link>
        </Menu.Item>

        <Menu.Item >
        <Link to='/gameplan'>
        <Icon name='chess board' size='big'/>
         Game Plan
         </Link>
        </Menu.Item>

        <Menu.Item >
        <Link to='/howitworks'>
        <Icon name='road' size='big'/>
        How It Works
        </Link>
        </Menu.Item>

        <Menu.Item >
        <Link to='/leancanvas'>
        <Icon name='file alternate outline' size='big'/>
         Lean Canvas
         </Link>
        </Menu.Item>

        <Menu.Item >
        <Link to='/contactus'>
        <Icon name='log out' size='big'/>
        Contact Us
        </Link>
        </Menu.Item>
        
      </Container>
    </Menu>

    {props.children}

    
  </div>
  )
        }

export default Layout