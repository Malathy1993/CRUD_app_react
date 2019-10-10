import React, { Component } from 'react';
import '../../header.css'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
             <a href="">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
             <a href="/"> Menu</a>
            </div>
         );
    }
}
 
export default Header;