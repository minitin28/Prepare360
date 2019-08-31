import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './menu';
import About from './About';
import Test from './Test';
import Footer1 from './Footer';
import Ccpp from './Ccpp';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Signin from './Signin';
import Register from './Register'
//import Footer1 from './Footer';

function App() {
  return (
    <BrowserRouter>
    <div >
      <Menu/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/test" component={Test}/>
      <Route path="/Ccpp" component={Ccpp}/>
      <Route path="/Signin" component={Signin}/>
      <Route path="/Register" component={Register}/>
      </Switch>
      <Footer1/>
    </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
      <div className="Teststyle">
          {/* <h2>Welcome to Home page</h2> */}
          <img src={require("./images/image2.jpg")}></img>
      </div>
  )
}
export default App;
