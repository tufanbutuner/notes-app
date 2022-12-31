import { BiMenu } from "react-icons/bi";
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

  @media (max-width: 600px) {
    position: absolute;
    top: 90px;
    display: flex;
    flex-direction: column;
  }
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

  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;
AddTaskButton.displayName = "AddTaskButton";

export const Router = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  li {
    margin-left: 24px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-bottom: 12px;

    li {
      margin-left: 0px;
    }
  }
`;
Router.displayName = "Router";

export const MenuIcon = styled(BiMenu)`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    cursor: pointer;
    position: absolute;
    right: 32px;
    top: 42px;
  }
`;
