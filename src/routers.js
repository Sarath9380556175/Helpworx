import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Freelancer from './freelancer';
import Signup from './signup'
import Thankyou from './thankyou';
import Header from './Header';
import Thank from './thank'
class Router extends React.Component{
    render()
    {
        return(
            <BrowserRouter>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/thankyou" component={Thankyou}/>
            <Route exact path="/freelancer" component={Freelancer}/>
            <Route exact path="/" component={Header}/>
            <Route exact path="/thank" component={Thank}/>
            </BrowserRouter>
        )
    }
}

export default Router;