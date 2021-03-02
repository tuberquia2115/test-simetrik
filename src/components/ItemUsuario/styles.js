import styled from "@emotion/styled";

export const Container = styled.div`
  width: 30%;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 10px;
  transition: all 0.25s;
  cursor: pointer;
  hr {
    background-color: var(--primary-dark);
    height: 4px;
  }

  p {
    font-weight: 600;
    color: var(--primary-dark);
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
export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  
`;

export const Imagen = styled.img`
  width: 20%;
  height: 20%;
`;

export const ContainerInfo = styled.div``;

export const ContainerState = styled.div`
  padding-left: 1rem;
  p {
    display: flex;
    align-items: center;
  }
  h3 {
    font-weight: 700;
    font-size: 15px;
    color: ${({ state }) => (state ? "green" : "red")};
  }
  time {
    font-family: "Roboto", sans-serif;
    color: #080101;
  }
`;

export const ContainerTags = styled.div`
  h4 {
    color: var(--primary-dark);
    font-family: "Opens Sans", sans-serif;
    font-weight: 600;
    font-size: 15px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    border: 1px dotted var(--primary-light);
    border-radius: 5px;
    margin: 5px 1px;
    padding: 5px;
    strong {
      background-color: var(--secondary-light);
      margin: 5px;
      padding: 5px;
      border-radius: 5px;
      color: var(--contrastText);
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;
