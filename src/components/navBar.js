import React from 'react';
import './react.css';
 import {NavLink} from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
        <div className="container-container navbar">
            <div className="row">
                <div className="col-md-12">
                   
                     <ul>
                        <li className="user"><NavLink to="/" className="btn btn-danger">USER</NavLink></li>
                         <li><NavLink to="/newuser" className="btn btn-success">NEW USER</NavLink></li>
                    </ul>
                   
                </div>
            </div>
        </div>
    </div>
  )
}


