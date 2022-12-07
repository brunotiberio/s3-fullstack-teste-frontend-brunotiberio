import styled from "styled-components";

export const StyledH1PersonalData = styled.h1`
  color: white;
  text-align: center;

  margin-top: 1rem;
`;

export const StyledH2PersonalData = styled.h2`
  color: white;
  text-align: center;

  margin-top: 0.5rem;
`;

export const StyledContainerButtonsPersonalData = styled.div`
  display: flex;
  margin: auto;

  max-width: 600px;

  button {
    margin: auto;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-right: 10px;
    border-radius: 20px 20px;

    width: 50%;

    height: 40px;
  }
`;

export const StyledButtonLogout = styled.button`
  background-color: #0b2d38;
  border: 2px solid white;
  color: white;

  :hover {
    background-color: #38101c;
    border: 2px solid red;
    color: white;
  }
`;

export const StyledButtonPersonalData = styled.button`
  background-color: #0b2d38;
  border: 2px solid white;
  color: white;

  :hover {
    background-color: #0c6885;
    border: 2px solid green;
    color: white;
  }
`;
