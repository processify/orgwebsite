import React from 'react'
import { Container,Header,Image,Divider ,Grid,Icon, Step, Segment} from 'semantic-ui-react';
import pilot from '../images/pilot.png'
import scale from '../images/scale.png'
import multi from '../images/multi.png'
import architecture from '../images/architecture.png'

function GamePlan() {
    return (
        <Container>
        <Header as='h1'  textAlign='centre' corner='top left'  className='mb-3'>

</Header>
        <Grid columns={1}  verticalAlign="middle">
      <Grid.Column textAlign="center">
       
      <Step.Group >
    <Step active>
       <Icon name='assistive listening systems' />
      <Step.Content>
        <Step.Title>Incubate</Step.Title>
        <Step.Description><p>Pilot for Single Org Ecosystem with one channel</p></Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='building' />
      <Step.Content>
        <Step.Title>Scale</Step.Title>
        <Step.Description>Scale and onbording more customers Single Org Ecosystem with multi channels</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='american sign language interpreting' />
      <Step.Content>
        <Step.Title>Multi Org Ecosystem</Step.Title>
        <Step.Description>Introduce and Scale for Multi Org Ecosystem</Step.Description>
      </Step.Content>
    </Step>

    
  </Step.Group>
       
  <Grid.Column textAlign="center">
     
      </Grid.Column>

    
       <Segment basic>
       <p>
      Below is a mind map of a <b>Incubation</b> State.
      </p>
        <Image  src={pilot}  size='large' centered/>
        <Divider hidden />
        <p>
      Below is a mind map of a <b>Scale</b> State.
      </p>
        <Image  src={scale}  size='large' centered/>
        <Divider hidden />
        <p>
      Below is a mind map of a <b>Multi Org Ecosystem</b> State.
      </p>
        <Image  src={multi} size='large' centered/>
        <Divider hidden />
        <p>
      Below is a mind map of a <b>End State Abstract Architecture</b> .
      </p>
        <Image  src={architecture} size='large' centered/>
        <Divider hidden />
       </Segment>
       <Divider hidden />
       </Grid.Column>
       </Grid>
     </Container>
    )
}

export default GamePlan
