import React from 'react';
import './Menustyle.css'
import {Link} from 'react-router-dom'
import Signin from './Signin';
//import IMG2 from './pics/IMG2.jpg';


const Menu = () => {
    return (
        <div className="Menustyle">
            {/* <ul>
                {/* <li> Teach Yourself</li>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="About"> About Us</Link></li>
                <li> 
                    <Link to="Test"> Test <span class="fa fa-angle-down"></span> </Link>
                    {/* <div className="dropdown-content" id="1">
                        <Link to ="./Ccpp">C and CPP</Link>
                        <Link to ="./Java">java</Link>
                        <Link to="./Dfsdbms">DFS AND DBMS</Link>
                    </div> */}

         {/* </div>/    </li>
                <li>Query</li>
                <li>Documents</li> */} 
          {/* //  </ul> */} 
          {/* <img src={"./pics/IMG2.JPG"}/>  */}
          {/* <img src={require("./images/image2.jpg")}></img> */}
          <ul className="nav justify-content-start">
              {<li className=" Head"> Teach Yourself</li> }
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="About">About</Link>
                    </li>
                    <div class="dropdown">
                        {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Test
                        </button> */}
                        <li className="nav-item">
                        <Link className="nav-link" to="/Test">Test</Link>
                        </li>
                        {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/Test/Ccpp">C and CPP</Link>
                            <Link className="dropdown-item" to="/Test/Java">Java</Link>
                            <Link className="dropdown-item" to="/Test/Dfsdbms">DFS and DBMS</Link>
                        </div> */}
                    </div>
                    <li className="nav-item">
                        <Link className="nav-link" to="Query">Query</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Signin">LOGIN</Link>
                    </li>
                   
                   
            </ul>
        </div>
    )
}


export default Menu;