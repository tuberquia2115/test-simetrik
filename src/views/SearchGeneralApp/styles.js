import styled from "@emotion/styled";

export const ContainerMain = styled.div`
  width: 95%;
  margin: 2rem auto;
`;

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledFiltros = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
  height: 40%;
`;

export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Message = styled.div`
  font-family: "Opens Sans", sans-serif;
  padding: 3rem;

  text-align: center;
  h4 {
    color: var(--secondary);
  }
  p {
    font-size: 15px;
    color: #212529;
  }
`;
