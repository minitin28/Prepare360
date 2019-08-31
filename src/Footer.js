import React from 'react';
import './Footerstyle.css'
//import {Link} from 'react-router-dom'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import Menu from './menu';
import About from './About';
import Test from './Test';
import Ccpp from './Ccpp';

const Footer1 = () => {
    return (
        <footer color ="blue" className="font-small pt-4 mt-4">
            <footercontainer fluid className="text-center text-md-left">
                <footerRow>
                    <footerCol md="6">
                        <h4 className="title">Footer Content</h4>
                    </footerCol>
                    <footerCol md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                            <Route path="/about" component={About}/>
                               <Route path="/test" component={Test}/>
                               <Route path="/Ccpp" component={Ccpp}/>
                            </li>
                        </ul>
                    </footerCol>
                </footerRow>
                
                
            </footercontainer>
        </footer>
    )  

}


export default Footer1;