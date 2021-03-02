import React from "react";
import {
  Container,
  StyledButton,
  StyledError,
  StyledForm,
  StyledInput,
} from "./styles.js";
export const SearchInput = ({ onchange, type, value }) => {
  const [error, setError] = React.useState(false);
  const [search, setSearch] = React.useState(value);

  const handleOnchange = ({ target: { value } }) => {
    setSearch(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    onchange(search);
  };
  return (
    <StyledForm noValidate onSubmit={onSubmit}>
      <Container>
        <StyledInput
          id="d-search"
          name="search"
          placeholder="Buscar..."
          type={type}
          value={search}
          aria-label="buscar category"
          onChange={handleOnchange}
          autoComplete="off"
        />
        <StyledButton type="submit">Buscar</StyledButton>
      </Container>
      {error && <StyledError>Campo obligatorio</StyledError>}
    </StyledForm>
  );
};
