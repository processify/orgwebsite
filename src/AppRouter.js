import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Objective from './components/Objective'
import HowItWorks from './components/HowItWorks';
import Leancanvas from './components/Leancanvas';

function AppRouter() {
    return (
   
     <div>

    
        <Route exact path='/' component={Home}></Route>
        <Route  path='/objective' component={Objective}></Route>
        <Route  path='/howitworks' component={HowItWorks}></Route>
        <Route  path='/leancanvas' component={Leancanvas}></Route>
        </div> 
       
      
    )
}

export default AppRouter
