import React from 'react'
import { Container,Image,Header,Divider } from 'semantic-ui-react';
import wfm from '../images/WFM.png'
import allocatetask from '../images/allocateTask.png'


function Screens() {
    return (
        <Container >
          <Header as='h1'  textAlign='centre' corner='top left'  className='mb-3'>

         </Header>
        <Image.Group  size='massive'>
        <Image src={wfm} />
       </Image.Group>   
       <Divider hidden />
       <Image.Group   size='small'>
        <Image centered src={allocatetask} />
    
        
       </Image.Group>

        </Container>
    )
}

export default Screens
