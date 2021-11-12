import React from 'react'
import { Container,Grid,Header } from 'semantic-ui-react';
import WoProcessify from './woProcessify';
import WProcessify from './wProcessify';


function Objective() {
    return (
    <Container>
     <Header as='h1'  textAlign='centre' corner='top left'  className='mb-3'>
     </Header>
     <Grid columns={2} divided >
     
    
      <Grid.Column textAlign="center">
      <WoProcessify/>
      </Grid.Column>
      <Grid.Column textAlign="center">
      <WProcessify/>
      </Grid.Column>
     </Grid>
     </Container>
         
     
       
    )
}

export default Objective
