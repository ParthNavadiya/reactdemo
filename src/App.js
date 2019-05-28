import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AddContact from './Component/AddContact'
import AllContact from './Component/AllContact'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
    render() {
        return (
                    <Router>
                         <div>
                         <nav className="navbar">
                             <div className="navbar-header">
                                     <a className="navbar-brand">Contact</a>
                             </div>
                                <ul className="nav navbar-nav">
                                    <li>
                                        <Link to="/">Contact Form</Link>
                                    </li>
                                    <li>
                                         <Link to="/contactlist">Contact Details</Link>
                                     </li>
         
                                 </ul>
                           </nav>
                            <hr />

                 <Route exact path="/" component={AddContact} />
                 <Route path="/contactlist" component={AllContact} />
        
                        </div>
                    </Router>
                );
    }
};

export default App;
