import React from 'react'
import { Container,Header,Image,Divider } from 'semantic-ui-react';
import wprocessify from '../images/wprocessify.png'

function wProcessify() {
    return (
      
         <Container fluid>
       
       <Header as='h1'>A Story withA Business Process Engine like Processify</Header>
       <p>
       A customer places a service request to Small or Medium Enterprise to deliver a service.
       Nornally it takes few days to few months to deliver the service.
       Till the service is delivered, customer gets all updates on chooses channel like email, 
       message or optional digital Apps.

       </p>
      
       <p>
         Small or Medium Enterprise will be powered by optional existing tools and new Processify SaaS 
         Platform to deliver service within time, budget and  quality, with uber like experience for happy
        customer and employee. They scale their business with current workforce and easily proactively 
        forecast additional workforce if needed.
       
       
       </p>
       <Divider hidden />
       <Image.Group   size='large'>
        <Image centered src={wprocessify} />
    
        
       </Image.Group>
       <Divider hidden />
    
     </Container>
            
       
    )
}

export default wProcessify
