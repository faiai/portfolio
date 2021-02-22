import React from 'react'
import {Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink} from './NavElements';

export default function Navbar() {
    return (
        <>
           <Nav>  {/* this is a style component and the react nav link allows more functionality */}
              
               <NavLink to="/">
                <h1>Kim Faiai</h1>
                {/* <img src={require('find the image path')}  alt=""/> */}
               </NavLink>
               <Bars />
               <NavMenu>
                  <NavLink to="/work" activeStyle>
                       Work
                   </NavLink> 
               <NavLink to="/about" activeStyle>
                       About
                   </NavLink>
                   <NavLink to="/misc" activeStyle>
                       Misc Moi
                   </NavLink>
                   {/* <NavBtn>
                   <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn> */}
               </NavMenu>
               {/* <NavBtn>
                   <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn> */}
           </Nav>
        </>
    )
}


