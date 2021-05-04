import styled from 'styled-components';

export const Container = styled.div`
  width: 20%;
  @media only screen 
  and (min-device-width : 300px) 
  and (max-device-width : 812px) {
    width: 80%;
  }
  height: 3vh;
  margin: 5px;
  border-radius: 6px;
  background: #F5F5F5;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 6px;
  border-width: 2px;
  border-style: solid;
  border-color: #00000080;
`;

export const InputContainer = styled.input`
  background: transparent;
  border-width: 0;
  width: 100%;
  height: 3vh;
  outline-width: 0;
`;
