import styled from "styled-components";

export const NavbarContainer = styled.div`
  font-family: "Space Grotesk", sans-serif;
  display: grid;
  align-items: center;
  grid-template-columns: 30% 70%;
  grid-template-areas: "logo pages";
  margin: 32px;
  padding: 12px 36px;

  @media (max-width: 600px) {
    padding: 0px;
  }
`;
NavbarContainer.displayName = "NavbarContainer";

export const NavbarLogo = styled.h1`
  grid-area: logo;
  font-size: 1.25rem;
  font-weight: bold;
`;
NavbarLogo.displayName = "NavbarLogo";

export const NavbarPages = styled.div`
  grid-area: pages;
  display: flex;
  justify-content: end;
  align-items: center;
`;
NavbarPages.displayName = "NavbarPages";

export const AddTaskButton = styled.button`
  font-family: "Space Grotesk", sans-serif;
  background: rgb(0, 0, 0, 0.1);
  border: 1px solid #d3d3d3;
  color: #000;
  font-weight: bold;
  border-radius: 12px;
  padding: 10px 16px;
  margin-left: 36px;
  cursor: pointer;
`;
AddTaskButton.displayName = "AddTaskButton";
