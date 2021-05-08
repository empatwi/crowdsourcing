import styled from 'styled-components';
import { colors } from '../../utils/theme';

export const NavContainer = styled.nav`
  align-items: center;
  background: ${colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  left: 0;
  padding: 0 2rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;
