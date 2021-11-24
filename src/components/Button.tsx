import styled, { css } from 'styled-components';

export const Button = styled.button<{ outline?: boolean }>`
  background: #1654f0;
  border-radius: 12px;
  height: 48px;
  padding: 0 1rem;
  font-family: 'Poppins';
  font-weight: 500;
  color: #fff;
  font-size: 20px;
  line-height: 1;
  border: none;
  cursor: pointer;

  ${({ outline }) =>
    outline &&
    css`
      background: transparent;
      color: #1654f0;
      box-shadow: 0 0 0 1px currentcolor;
    `}
`;
