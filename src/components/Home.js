import React from 'react'
import { Container,Grid,Header } from 'semantic-ui-react';
import Vision from './Vision';
import Screens from './Screens';

function Home() {
    return (
        <Container>
           <Header as='h1'  textAlign='centre' corner='top left'  className='mb-3'>

         </Header>
        <Grid columns={2} divided verticalAlign="middle">
      <Grid.Column>
      <Vision/>
      </Grid.Column>
      <Grid.Column >
      <Screens/>
      </Grid.Column>
  </Grid>

        </Container>
            
        
    )
}

export default Home
