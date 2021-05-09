import styled from 'styled-components';
import { fontSize } from '../../constants';
import { colors } from '../../utils/theme';

export const FooterContainer = styled.div`
  align-items: center;
  background-color: ${colors.darkGray};
  bottom: 0;
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  font-size: ${fontSize};
  height: 10vh;
  justify-content: space-between;
  left: 0;
  padding: 0 2rem;
  right: 0;
  width: 100vw;
  z-index: 1;
  @media (min-width: 768px) {
    position: absolute;
  }
`;
