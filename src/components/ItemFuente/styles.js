import styled from "@emotion/styled";
export const Container = styled.div`
  width: 30%;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 10px;
  transition: all 0.25s;
  cursor: pointer;

  p {
    font-weight: 600;
    color: var(--secondary);
    font-size: 13px;
    font-family: "Opens Sans", sans-serif;
  }
  strong {
    font-family: "Opens Sans", sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: black;
  }
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 16px rgb(0, 0, 0, 0.2);
  }
`;

export const ContainerState = styled.div`
  p {
    display: flex;
    align-items: center;
  }
  h3 {
    font-weight: 700;
    margin-left: 3px;
    font-size: 15px;
    color: ${({ state }) => (state ? "green" : "red")};
  }
`;

export const ContainerInfo = styled.div``;

export const ContainerTags = styled.div`
  h4 {
    color: var(--secondary);
    font-family: "Opens Sans", sans-serif;
    font-weight: 600;
    font-size: 15px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid var(--secondary-light);
    border-radius: 5px;
    margin: 5px 1px;
    padding: 5px;
    strong {
      background-color: var(--primary);
      margin: 5px;
      padding: 5px;
      border-radius: 5px;
      color: var(--contrastText);
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;

export const ContainerDescript = styled.div`
  p {
    font-size: 13px;
    color: #212529 !important;
    font-family: "Opens Sans", sans-serif;
    text-align: justify;
    font-weight: 500;
  }
`;
