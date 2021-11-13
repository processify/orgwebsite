import React from 'react'
import { Container,Header,Image,Divider ,Grid,Icon, Step} from 'semantic-ui-react';
import howitworks from '../images/howitworks.png'

function HowItWorks() {
    return (
        <Container fluid>

<Header as='h1'  textAlign='centre' corner='top left'  className='mb-3'>

</Header>



<Grid columns={1}  verticalAlign="middle">
      <Grid.Column textAlign="center">
       
      <Step.Group >
    <Step active>
       <Icon name='assistive listening systems' />
      <Step.Content>
        <Step.Title>Listen</Step.Title>
        <Step.Description><p>We Understand your Biz Process </p></Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='building' />
      <Step.Content>
        <Step.Title> Build</Step.Title>
        <Step.Description>We Deliver, Demonstrate and Train.</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='american sign language interpreting' />
      <Step.Content>
        <Step.Title>Use & Cadence</Step.Title>
        <Step.Description>You Use and provide feedback.We Optimize</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
    <Icon name='money bill alternate' />
      <Step.Content>
        <Step.Title>Pay</Step.Title>
        <Step.Description>You pay beyond an agreed threshold usage</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
       
  <Grid.Column textAlign="center">
     <p>
      Below is a mind map of a sample journey with processify. It is ineractive, interesting and value driven. 
      We belief in <b>No Use No Pay </b> Policy.
      </p>
      </Grid.Column>

       <Divider hidden />
       <Image.Group   size='large'>
        <Image  src={howitworks} />
    
        
       </Image.Group>
       <Divider hidden />
       </Grid.Column>
       </Grid>
     </Container>
    )
}

export default HowItWorks
