import styled from "@emotion/styled";

export const ContainerCard = styled.div`
  width: 45%;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 10px;
  transition: all 0.25s;
  cursor: pointer;
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 16px rgb(0, 0, 0, 0.2);
  }
  hr {
    background-color: #908090;
    height: 0.3rem;
    border-radius: 50%;
  }
`;

export const StyledState = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 0.5em;
  color: ${({ state }) => (state ? "#9d3398" : "#ff5203")};
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: var(--primary-dark);
    font-size: 15px;
  }

  strong {
    color: black;
    font-family: "Opens Sans", sans-serif;
    font-size: 15px;
  }
`;

export const CardBody = styled.div`
  .firstContent {
    display: flex;
    justify-content: space-between;

    p {
      color: black;
      font-family: "Opens Sans", sans-serif;
    }
    strong {
      color: var(--primary-dark);
      font-size: 15px;
    }
  }
  .timesTab {
    strong {
      color: var(--primary-dark);
      font-size: 15px;
      font-family: "Opens Sans", sans-serif;
    }
    time {
      color: black;
      font-family: "Opens Sans", sans-serif;
    }
  }

  .secondContent {
    padding-top: 5px;

    .description p {
      font-size: 13px;
      color: #212529;
      font-family: "Opens Sans", sans-serif;
      text-align: justify;
      font-weight: 500;
    }
  }
`;

export const Tabs = styled.div`
  width: inherit;
  flex-wrap: wrap;
  display: flex;
  width: auto;

  strong {
    background-color: var(--secondary);
    padding: 0.3rem;
    font-size: 13px;
    color: #fff;
    margin: 3px;
    border-radius: 5px;
    font-family: "Opens Sans", sans-serif;
  }
`;

export const ContainerTabs = styled.div`
  display: flex;
  flex-direction: column;
  h6 {
    font-size: 15px;
    color: var(--primary-dark);
    font-weight: 400;
    padding-bottom: 5px;
  }
`;
