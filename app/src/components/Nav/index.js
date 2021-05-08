import { useState } from 'react';
import { root } from '../../constants';
import { navBar } from '../../utils';
import { NavContainer } from './container';
import NavHamburger from './hamburger';
import NavLogo from './logo';
import { Menu, MenuLink } from './menu';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer isOpen={isOpen}>
      <NavLogo size="80%" />
      <NavHamburger onClick={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen}>
        {navBar.map(item => {
          return (
            item?.path !== root && (
              <MenuLink key={item?.path} to={item?.path}>
                {item?.title}
              </MenuLink>
            )
          );
        })}
      </Menu>
    </NavContainer>
  );
};

export default Nav;
