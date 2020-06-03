import React from 'react';
import Home from './pages/home';
import Error from './pages/error';
import Servicios from './pages/servicios';
import {Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/navbar'
import Button1 from './components/button1'
import Container1 from './components/container1'
import Container2 from './components/container2'
import Container3 from './components/container3'
import Footer from './components/footer'
import Store from "./store/store";
import { Provider } from "react-redux";
import Signin1 from './components/signin1'
import Nav from './components/nav'
import Login from './components/login'
import Create from './components/create'
import Main from './components/main'
import Post from './components/Post'






function App() {
  return (
   <Provider store = {Store}>
   
   <div>
     
   <Nav></Nav>
      
      
      
      <Switch>
     
     <Route exact path="/" component={Home}/>
     <Route exact path="/Signin1/" component={Signin1}/>
     <Route exact path="/login" component={Login} />
     <Route exact path="/Create" component={Create}/>
     <Route exact path="/post/:id" component={Post}/>
     <Route exact path="/Servicios/" component={Servicios}/>
     <Route exact path="/Error/" component={Error}/>
     
     <Link exact path="/Error/" component={Button1}/>


    <Route component={Error}/>
     </Switch>

     
    
     


   </div>
   </Provider>
  );
}

export default App;
