import React from 'react'
import { Container,Header,Image,Divider } from 'semantic-ui-react';
import woprocessify from '../images/woprocessify.png'

function woProcessify() {
    return (
      
         <Container fluid>
       
       <Header as='h1'>A Story without A Business Process Engine like Processify</Header>
       <p>
       A customer places a service request to Small or Medium Enterprise to deliver a service.
       Nornally it takes few days to few months to deliver the service.
       Till the service is delivered, most of the cases customer does not get a view what is 
       happeing on the request, whether customer needs to take an action or whether the request 
       will be delivered on time. Today's customer is expecting uber like experience for his 
       each and every request. In reality, it is multiple telephone calls , messages, face to face chat and
        emails between customer and Small or Medium Enterprise.

       </p>
  
       <p>
       Normally Small or Medium Enterprise or theor partners are powered by Microsoft tools , old communication techniques and
       people smart to deliver service within time, budget and  quality.
       They strugle to manage their internal procesases , meet customer Uber like expectation and internal employee efficiency
       & satisfaction. Finally daily they faces challenges to run business , work extra hours and hire more people to 
       manage the demand.  
       
       </p>

       <Divider hidden />
       <Image.Group   size='massive'>
        <Image  src={woprocessify} />
    
        
       </Image.Group>
       <Divider hidden />
    
     </Container>
            
       
    )
}

export default woProcessify
