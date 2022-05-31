import styled from "styled-components";

export const ModalBackground = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
ModalBackground.displayName = "ModalBackground";

export const ModalContainer = styled.div`
  width: 500px;
  height: 248px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  justify-content: space-between;
`;
ModalContainer.displayName = "ModalContainer";

export const ModalHeader = styled.div``;
ModalHeader.displayName = "ModalContent";

export const ModalBody = styled.div`
  padding-bottom: 10px;
  border-top: 1px solid #eee;

  input {
    width: 100%;
    padding: 4px;
    font-family: "Space Grotesk", sans-serif;
  }
`;
ModalBody.displayName = "ModalContent";

export const ModalTitle = styled.h4`
  user-select: none;
`;
ModalTitle.displayName = "ModalTitle";

export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
`;
ModalFooter.displayName = "ModalContent";

export const CloseButton = styled.button`
  font-family: "Space Grotesk", sans-serif;
  background: rgb(0, 0, 0, 0.1);
  border: 1px solid #d3d3d3;
  color: #000;
  font-weight: bold;
  border-radius: 12px;
  padding: 10px 14px;
  cursor: pointer;
`;
CloseButton.displayName = "CloseButton";

export const SubmitButton = styled.button`
  font-family: "Space Grotesk", sans-serif;
  background: #008000;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 12px;
  padding: 10px 14px;
  cursor: pointer;
  margin-left: 6px;
`;
SubmitButton.displayName = "SubmitButton";
