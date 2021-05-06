// import React from 'react';
// import {
//   AppBar,
//   Button,
//   IconButton,
//   Menu,
//   MenuItem,
//   Toolbar,
//   Typography,
//   useMediaQuery,
// } from '@material-ui/core';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import PropTypes from 'prop-types';
// import { root } from '../../constants';
// import { navBar } from '../../utils';

// const useStyles = makeStyles(theme => ({
//   headerOptions: {
//     display: 'flex',
//     flex: 1,
//     justifyContent: 'space-evenly',
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     [theme.breakpoints.down('xs')]: {
//       flexGrow: 1,
//     },
//   },
// }));

// const Navbar = props => {
//   const { history } = props;
//   const classes = useStyles();

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   // const isMobile = true;

//   const handleMenu = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClick = pageURL => {
//     // history.push(pageURL);
//     setAnchorEl(null);
//   };

//   const handleButtonClick = pageURL => {
//     // history.push(pageURL);
//   };

//   const menuItems = [
//     {
//       menuTitle: 'Home',
//       pageURL: '/',
//     },
//     {
//       menuTitle: 'Contact',
//       pageURL: '/contact',
//     },
//     {
//       menuTitle: 'About',
//       pageURL: '/about',
//     },
//   ];

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           {/* <Nav> */}
//           <NavLink to="/">
//             <img
//               alt="logo"
//               src="http://localhost:3000/logo512.png"
//               style={{ height: 60, width: 60 }}
//             />
//           </NavLink>
//           {isMobile ? (
//             <>
//               <IconButton
//                 aria-label="menu"
//                 className={classes.menuButton}
//                 color="inherit"
//                 edge="start"
//                 onClick={handleMenu}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   horizontal: 'right',
//                   vertical: 'top',
//                 }}
//                 id="menu-appbar"
//                 keepMounted
//                 onClose={() => setAnchorEl(null)}
//                 open={open}
//                 transformOrigin={{
//                   horizontal: 'right',
//                   vertical: 'top',
//                 }}
//               >
//                 {menuItems.map(menuItem => {
//                   const { menuTitle, pageURL } = menuItem;
//                   return (
//                     <MenuItem
//                       key={menuItem?.menuTitle}
//                       onClick={() => handleMenuClick(pageURL)}
//                     >
//                       {menuTitle}
//                     </MenuItem>
//                   );
//                 })}
//               </Menu>
//             </>
//           ) : (
//             <>
//               <Bars />
//               <NavMenu>
//                 {navBar.map(item => {
//                   if (item?.path !== root)
//                     return (
//                       <NavLink activeStyle key={item?.path} to={item?.path}>
//                         {item?.title}
//                       </NavLink>
//                     );
//                 })}
//               </NavMenu>
//             </>
//           )}
//           {/* </Nav> */}
//         </Toolbar>
//       </AppBar>
//     </div>
//     // <Nav>
//     //   <NavLink to="/">
//     //     <img
//     //       alt="logo"
//     //       src="http://localhost:3000/logo512.png"
//     //       style={{ height: 60, width: 60 }}
//     //     />
//     //   </NavLink>
//     //   <Bars />
//     //   <NavMenu>
//     //     {navBar.map(item => {
//     //       if (item?.path !== root)
//     //         return (
//     //           <NavLink activeStyle key={item?.path} to={item?.path}>
//     //             {item?.title}
//     //           </NavLink>
//     //         );
//     //     })}
//     //   </NavMenu>
//     // </Nav>
//   );
// };

// Navbar.propTypes = {
//   history: PropTypes.any.isRequired,
// };

// export default Navbar;

import React, { useState } from 'react';
import styled from 'styled-components';
import { root, navBarHeight } from '../../constants';
import { navBar } from '../../utils';
import { colors } from '../../utils/theme';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './elements';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="">
        Eli<span>Codes</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {navBar.map(item => {
          if (item?.path !== root)
            return (
              <NavLink activeStyle key={item?.path} to={item?.path}>
                {item?.title}
              </NavLink>
            );
        })}
      </Menu>
    </Nav>
  );
};

export default NavBar;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  align-items: center;
  background: ${colors.green};
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 0px;
  width: 50%;
  top: ${navBarHeight};
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  flex-direction: column;
  span {
    background: ${colors.white};
    border-radius: 5px;
    height: 2px;
    margin-bottom: 4px;
    width: 25px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
