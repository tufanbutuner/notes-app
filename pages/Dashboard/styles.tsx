import styled from "styled-components";

export const Task = styled.span`
  display: block;
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
  font-family: "Space Grotesk", sans-serif;
`;
Task.displayName = "Task";

export const DashboardContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
  font-family: "Space Grotesk", sans-serif;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "image tasks";
  height: 500px;

  img {
    padding: 24px;
  }
`;
DashboardContainer.displayName = "DashboardContainer";

export const TaskListContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
  font-family: "Space Grotesk", sans-serif;

  grid-area: tasks;
  display: block;
  width: 100%;
  margin: auto;
  justify-content: center;
  padding: 12px;
`;
TaskListContainer.displayName = "TaskListContainer";
