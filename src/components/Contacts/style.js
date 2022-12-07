import styled from "styled-components";

export const StyledH3ContactsPersonalData = styled.h3`
  color: white;
  margin-left: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledDivContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 700px;
  margin: auto;

  button {
    margin-bottom: 10px;
    width: 60%;
    height: 40px;
    border: 2px solid white;

    background-color: #0c6885;

    font-size: 15px;
    font-weight: 600;

    :hover {
      background-color: #0b2d38;
    }
  }
`;
