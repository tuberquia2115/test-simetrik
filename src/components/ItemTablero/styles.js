import styled from '@emotion/styled';

export const Container = styled.div`
  width: 45%;
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