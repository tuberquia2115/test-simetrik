import styled from "@emotion/styled";
export const StyledForm = styled.form`
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  width: inherit;
  padding-bottom: 1em;
`;
export const StyledInput = styled.input`
  border: 1px solid var(--primary);
  list-style: none;
  padding: 1em;
  font-size: 15px;
  border-radius: 5px;
  width: 100%;
  outline: none;
`;
export const StyledButton = styled.button`
  border: none;
  padding: 1em 2em 1em 2em;
  margin-left: 1rem;
  border-radius: 5px;
  font-size: 15px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  background-color: var(--primary);
  outline: none;

  &:hover {
    background-color: #ffffff;
    border: 1px solid var(--primary);
    color: var(--primary);
  }
`;

export const StyledError = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: red;
  padding: 2px 0px 2px 0px;
 
`;
