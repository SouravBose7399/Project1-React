
import React from "react";
import './App.css';
import { Navbar } from './Components/Navbar'
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Contacts} from './Components/Contacts';
import {Services} from './Components/Services';
import {Footer} from './Components/Footer'
import {Switch,Route, Redirect} from "react-router-dom"
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contacts}/>
      <Route exact path="/services" component={Services}/>
      <Redirect to="/"/>
    
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
