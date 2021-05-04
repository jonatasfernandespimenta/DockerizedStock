import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  width: 100%;
  height: 10%;
  background: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: 10%;
  background: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen 
  and (min-device-width : 300px) 
  and (max-device-width : 812px) {
    flex-direction: column;
  }
`;

export const ButtonGroup = styled.div`
  width: 100px;
  margin-right: 20px;
`;

export const Text = styled.p`
  margin-left: 30px;
  text-align: center;
  width: 300px;

  @media only screen 
  and (min-device-width : 300px) 
  and (max-device-width : 812px){
    text-align: center;
    margin-left: 0px;
  }
`;

export const Button = styled.button`
  border-width: 0px;
  background: #20A506;
  height: 50%;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  @media only screen 
  and (min-device-width : 300px) 
  and (max-device-width : 812px) {
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;
