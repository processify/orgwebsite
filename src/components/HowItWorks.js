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
       <Icon name='info' />
      <Step.Content>
        <Step.Title>Listen</Step.Title>
        <Step.Description><p>We understand and model your own business process </p></Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Demonstrate</Step.Title>
        <Step.Description>We implement,delivere, demomntrate and optimize the process.</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Use</Step.Title>
        <Step.Description>You use and provide feedback.</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
    <Icon name='payment' />
      <Step.Content>
        <Step.Title>Pay</Step.Title>
        <Step.Description>You pay if usage crosses an agreed threshold</Step.Description>
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
