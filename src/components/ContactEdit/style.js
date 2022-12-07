import styled from "styled-components";

export const StyledContainerInputsContactEdit = styled.div`
  width: 70vw;
  max-width: 70vw;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin: auto;
  margin-top: 10px;
`;

export const StyledContainerContactEdit = styled.div`
  background-color: #0c6885;
  border-radius: 20px 20px;
  box-shadow: 5px 10px 10px white;

  min-width: 400px;
  margin: auto;

  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    input {
      margin-top: 10px;
      width: 300px;
      min-width: 150px;
      max-width: 300px;

      height: 50px;

      background-color: white;

      border: 2px solid #857c13;
      border-radius: 20px 20px;

      text-align: center;
    }

    button {
      margin: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      border: 2px solid #383405;
      border-radius: 20px 20px;

      width: 50%;
      height: 40px;
    }
  }

  p {
    color: #38101c;
    font-weight: 500;
    margin-left: 5%;

    font-size: 12px;
  }
`;

export const StyledButtonContainerContactEdit = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;

  button {
    margin-bottom: 10px;
    margin-left: 10px;
    border: 2px solid #383405;
    border-radius: 20px 20px;

    width: 20%;
    height: 40px;
  }
`;
