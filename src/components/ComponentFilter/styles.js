import styled from "@emotion/styled";

export const Container = styled.div`
  padding-top: 1rem;
`;
export const ContainerSelect = styled.div`
  border: 1px solid #d9d9d9;
  display: inline;
  height: 30px;
  overflow: hidden;
  position: relative;
  width: auto;
  padding: 8px 0px;
  select {
    background: transparent;
    border: none;
    font-size: 14px;
    height: 30px;
    &:focus {
      outline: none;
    }
  }
  option {
    padding: 1rem;
    margin: 1rem;
    width: inherit;
  }
`;

export const Title = styled.p`
  margin-bottom: 8px;
  color: var(--primary-dark);
  font-weight: 400;
`;
