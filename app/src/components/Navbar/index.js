import { navBar } from '../../utils';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  const root = '/';

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
        {navBar.map(item => {
          if (item?.path !== root)
            return (
              <NavLink activeStyle key={item?.path} to={item?.path}>
                {item?.title}
              </NavLink>
            );
        })}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
