import styled from "styled-components";

export const Task = styled.span`
  display: block;
`;
Task.displayName = "Task";

export const DashboardContainer = styled.div`
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
  grid-area: tasks;
  display: block;
  width: 100%;
  margin: auto;
  justify-content: center;
  padding: 12px;
`;
TaskListContainer.displayName = "TaskListContainer";
