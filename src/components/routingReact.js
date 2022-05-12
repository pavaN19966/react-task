import React from 'react';
import {Routes,Route, NavLink} from 'react-router-dom'
import GetMethod from './getMethod';
import PostMethod from './postMethod';

export default function RoutingReact() {
  return (
    <div>

        
        <Routes>
            <Route path="/" element={<GetMethod />} />
            <Route path="/newuser" element={<PostMethod />} />
        </Routes>
    </div>
  )
}
