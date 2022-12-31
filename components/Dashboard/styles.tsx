import styled from "styled-components";

export const Task = styled.span`
  display: block;
  font-family: "Space Grotesk", sans-serif;
  margin-top: 16px;
  background: rgb(0, 0, 0, 0.1);
  border: 1px solid #d3d3d3;
  border-radius: 6px;
  padding: 6px 12px;
  align-items: center;

  input {
    float: right;
  }
`;
Task.displayName = "Task";

export const DashboardContainer = styled.div`
  font-family: "Space Grotesk", sans-serif;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    margin-top: ${(show: any) => (show ? "90px" : "0px")};
  }

  display: flex;
  flex-direction: column;
`;
DashboardContainer.displayName = "DashboardContainer";

export const TaskListContainer = styled.div`
  font-family: "Space Grotesk", sans-serif;
  grid-area: tasks;
  display: block;
  width: 100%;
  margin-top: 32px;
  justify-content: center;
  padding: 0px 48px 0px 48px;

  @media (max-width: 600px) {
    margin-top: 0px;
    padding: 0px 24px;
  }
`;
TaskListContainer.displayName = "TaskListContainer";
