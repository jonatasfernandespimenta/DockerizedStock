import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: white;
  height: 100%;
  border-radius: 6px;
  width: 100%;
  flex-direction: column;
`;

export const Button = styled.button`
  border-width: 0px;
  background: ${({ color }) => color};
  height: 6%;
  width: 10%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  margin: 5px;
  @media only screen 
  and (min-device-width : 300px) 
  and (max-device-width : 812px) {
    width: 150px;
  }
`;
