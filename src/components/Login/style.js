import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #0c6885;
  border-radius: 20px 20px;
  box-shadow: 5px 10px 10px white;

  margin: auto;
  margin-top: 5rem;

  max-width: 40%;
  height: 55vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;

    margin: auto;

    width: 80%;

    input {
      margin-top: 10px;

      height: 40px;

      background-color: white;

      border: 2px solid #857c13;
      border-radius: 20px 20px;

      text-align: center;
    }

    button {
      margin: auto;
      margin-top: 10px;
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

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-bottom: 5px;
      color: white;
    }

    button {
      margin: auto;
      margin-top: 10px;
      margin-bottom: 20px;
      border: 2px solid #383405;
      border-radius: 20px 20px;

      width: 50%;
      height: 40px;
    }
  }
`;
