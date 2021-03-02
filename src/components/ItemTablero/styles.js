import styled from '@emotion/styled';

export const Container = styled.div`
  width: 35%;
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
    color: var(--secondary);
    font-size: 13px;
    font-family: "Opens Sans", sans-serif;
  }
  strong {
    padding-left: 5px;
  }
  time {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: black;
    padding-left: 5px;
  }
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 16px rgb(0, 0, 0, 0.2);
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
   
    
    strong {
      background-color: var(--secondary-light);
      margin: 5px;
      padding: 5px;
      border-radius: 5px;
      color: var(--contrastText);
      font-weight: 600;
      font-size: 13px;
      text-transform: capitalize;
    }
  }
`;

export const ContainerState = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    display: flex;
    align-items: center;
  }
  h3 {
    font-weight: 700;
    font-size: 15px;
    padding-left: 3px;
    color: ${({ state }) => (state ? "green" : "red")};
  }
`;

export const ContainerInfo = styled.div``;

export const ContainerVisual = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledVisual = styled.div`
  h4 {
    color: var(--primary);
    font-family: "Opens, Sans", sans-serif;
  }
`;

export const ContainerTimestamp = styled.div`
  margin: 5px 5px;
`;

export const ContainerDescrip = styled.div`
  p {
    font-size: 13px;
    color: #212529 !important;
    font-family: "Opens Sans", sans-serif;
    text-align: justify;
    font-weight: 500;
  }
`;
