import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img
          alt="logo"
          src="http://localhost:3000/logo512.png"
          style={{ height: 60, width: 60 }}
        />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink activeStyle to="/about">
          About
        </NavLink>
        <NavLink activeStyle to="/services">
          Services
        </NavLink>
        <NavLink activeStyle to="/contact-us">
          Contact Us
        </NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to="/sign-in">Sign In</NavBtnLink> */}
      </NavMenu>
      {/* <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn> */}
    </Nav>
  );
};

export default Navbar;
