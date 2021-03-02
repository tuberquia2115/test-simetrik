import React from "react";
import PropTypes from "prop-types";
import { Container, Title, ContainerSelect } from "./styles.js";

export const ComponentFilter = ({ setType, type }) => {
  return (
    <Container>
      <Title>Filtrar por:</Title>
      <ContainerSelect>
        <select
          id="form-label"
          name="typeDate"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option disabled value="">
            Selecciona una opción
          </option>
          <option value="text">Texto</option>
          <option value="number">Numero</option>
          <option value="date">Fecha</option>
        </select>
      </ContainerSelect>
    </Container>
  );
};

ComponentFilter.propTypes = {
  setType: PropTypes.func.isRequired,
};
