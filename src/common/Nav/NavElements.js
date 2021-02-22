import styled from 'styled-components'
import {NavLink as Tacos} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
// background: #000;
height:80px;
display:flex;
justify-content: space-between;
padding: 0.5rm calc((100vw - 1000px) / 2);
z-index:10;
a:link {
    text-decoration: none;
  }
a:visited {
    text-decoration: none;
  }
`;

// this cannot be the same name
// the const NavLink cannot be the same as the import above...hence the tacos
export const NavLink = styled(Tacos)`
color: #000;
display:flex;
align-items: center;
text-decorations: none;
padding: 0 1rem;
height: 100%;
cursor:pointer;

//this is for the active style... idk how it knows but it knows
&.active{
color: #15cdfc
}
`;

export const Bars = styled(FaBars)`
display:none;
color: #fff;

@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75&);
    font-size: 1.8rem;
    cursor:pointer;
}
`;

export const NavMenu = styled.div`
display:flex;
align-items: center;
// margin-right: -24px;

// second nav
margin-right: 24px;

@media screen and (max-width: 768px){
    display:none;
}
`;

// export const NavBtn = styled.nav`
// display:flex;
// align-items: center;
// margin-right: 24px;

// @media screen and (max-width: 768px){
//     display:none;}`;

// export const NavBtnLink = styled(Tacos)`
//     border-radius: 4px;
//     background: #256ce1;
//     padding: 10px 22px;
//     color: #fff;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     // second nav
//     margin-left: 24px;

//     &:hover{
//         transition: all 0.2s ease-in-out;
//         background: #fff
//         color: #010606;
//     }
    // `;