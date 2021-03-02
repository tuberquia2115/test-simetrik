import styled from "@emotion/styled";

export const StyledTitle = styled.h4`
  color: var(--primary-dark);
  font-weight: 400;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`;

export const StyledItem = styled.li`
  padding: 1rem 1rem 1rem 5px;
  color: black;
  font-family: "Opens Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-dark);
    color: #fff;
    font-weight: 600;
  }

  ${(props) => {
    if (props.active) {
      return `
      background-color:var(--primary-dark);
      color: #fff;
      font-weight: 600;
      `;
    }
  }}
`;
