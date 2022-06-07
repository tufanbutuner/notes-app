import styled from "styled-components";
import styledComponents from "styled-components";

export const Container = styled.div`
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 36px;
  }
`;
Container.displayName = "Container";

export const TaskContainer = styled.div``;
TaskContainer.displayName = "TaskContainer";

export const RegisterContainer = styled.div`
  margin: auto;
  padding: 24px;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "image tasks";
  height: 500px;
`;
RegisterContainer.displayName = "RegisterContainer";
