import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Objective from './components/Objective'
import HowItWorks from './components/HowItWorks';
import Leancanvas from './components/Leancanvas';
import ContactUs from './components/ContactUs';
import GamePlan from './components/GamePlan';

function AppRouter() {
    return (
   
     <div>

    
        <Route exact path='/' component={Home}></Route>
        <Route  path='/objective' component={Objective}></Route>
        <Route  path='/howitworks' component={HowItWorks}></Route>
        <Route  path='/leancanvas' component={Leancanvas}></Route>
        <Route  path='/contactus' component={ContactUs}></Route>
        <Route  path='/gameplan' component={GamePlan}></Route>
        </div> 
       
      
    )
}

export default AppRouter
