import React from 'react'
import { Container,Header,Image,Divider } from 'semantic-ui-react';
import leancanvas from '../images/leancanvas.jpg'

function Leancanvas() {
    return (
        <Container>
     <Header as='h1'  textAlign='centre' corner='top left'  className='mb-3'>
     </Header>
   
     <Image.Group   size='massive'>
        <Image  src={leancanvas} />
    
        
       </Image.Group>
       <Divider hidden />
      

     </Container>
    )
}

export default Leancanvas
