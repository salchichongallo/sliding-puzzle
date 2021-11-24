import styled from 'styled-components';

export const Board = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: ${128 * 3 + 2 * 24}px;
`;
