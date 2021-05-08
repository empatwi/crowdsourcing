import styled from 'styled-components';
import { colors } from '../../utils/theme';

export const CardContainer = styled.div`
  align-items: center;
  background: ${colors.white};
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 16rem;
  padding: 2rem 1rem;
  width: 70%;
`;
