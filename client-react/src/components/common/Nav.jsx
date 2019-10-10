import React, { Component } from 'react';
import "../../Nav.css"

class Nav extends Component {
    state = {  }
    render() { 
        return ( 
           <div>
               <div class="sidenav">
    <ul>
        <li><h1>Project</h1></li>
        <ul>
         <li> <a href="/AddProject">Create Project</a></li>
         <li> <a href="/">List Project</a></li>
         </ul>
    </ul> 
</div>
           </div>

         );
    }
}
 
export default Nav;