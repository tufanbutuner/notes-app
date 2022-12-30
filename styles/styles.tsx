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
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 24px;
`;
RegisterContainer.displayName = "RegisterContainer";
