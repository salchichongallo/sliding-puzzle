import styled from 'styled-components';

const Box = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  /* &:hover {
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  &:active {
    border-radius: 50px;
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    z-index: 10;
  } */
`;

export default Box;
