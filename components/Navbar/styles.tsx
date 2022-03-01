import styled from "styled-components";

export const NavbarContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
  font-family: "Space Grotesk", sans-serif;
  display: grid;
  align-items: center;
  grid-template-columns: 30% 70%;
  grid-template-areas: "logo pages";
  margin: 32px;
  padding: 12px 36px;
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
  background: #2f2fff;
  color: white;
  font-weight: bold;
  border-radius: 12px;
  padding: 10px 16px;
  margin-left: 36px;
`;
AddTaskButton.displayName = "AddTaskButton";
