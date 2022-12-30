import styled from "styled-components";

export const FormCard = styled.div``;

export const FormContainer = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 32px;

  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  h1 {
    display: flex;
    justify-content: center;
  }
`;

export const SubmitButton = styled.input`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Space Grotesk", sans-serif;

  &:hover {
    background-color: #45a049;
  }
`;
