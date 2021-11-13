import React from 'react'
import whoweare from '../images/whoweare.png'
import { Container,Header,Image,Divider,Icon } from 'semantic-ui-react';

function ContactUs() {
    return (
        <Container>
     <Header as='h1'  textAlign='centre' corner='top left'  className='mb-3'>
     </Header>
   
     <Image.Group   size='large'>
        <Image  src={whoweare} />
       </Image.Group>
       <Divider hidden />
       <p>
       We’re industry experienced, passionate and talented group of professionals with a groundbreaking idea designed to 
       contribute towards a better tomorrow for your business process. We provide smart Business Process consultancy, 
       development, training, support solutions for companies of all sizes and pride ourselves on our unparalleled, 
       dedicated service. At processify, we believe that
       the right understanding and technological edge can lead companies towards a successful outcome
       </p>
       Contact Us at <Icon name='mail' size='big'/> <b> processify.outlook.com </b>
      

     </Container>
    )
}

export default ContactUs
