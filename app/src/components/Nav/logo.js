// import { Grid } from '@material-ui/core';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { root } from '../../constants';
import LogoFull from '../../svgs/LogoFull';

const NavLogo = () => {
  return (
    // <Grid container display="flex" flexDirection="column">
    <NavLogoContainer to={root}>
      {/* <Grid item sm={12} xs={6}> */}
      <LogoFull />
      {/* </Grid> */}
    </NavLogoContainer>
    // </Grid>
  );
};

const NavLogoContainer = styled(Link)`
  background: pink;
  max-width: 200px;
  min-width: 100px;
  width: 40vw;
`;

export default NavLogo;
