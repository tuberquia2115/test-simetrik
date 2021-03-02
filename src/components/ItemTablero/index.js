import React from "react";
import { ListVisualType } from "./ListVisualType";
import {
  Container,
  ContainerTags,
  ContainerState,
  ContainerInfo,
  ContainerVisual,
  StyledVisual,
  ContainerTimestamp,
  ContainerDescrip,
} from "./styles";

export const ItemTablero = ({
  isActive,
  dashboardName,
  visualType,
  visuals,
  timestamp,
  description,
  tags,
}) => {
  return (
    <Container>
      <ContainerState state={isActive}>
        <p>
          Nombre Tablero: <strong>{dashboardName}</strong>
        </p>
        <p>
          Estado: <h3> {isActive ? " Activo " : " Inactivo "}</h3>
        </p>
      </ContainerState>
      <hr/>
      <ContainerInfo>
        <ContainerVisual>
          <StyledVisual>
            <h4>Tipos visuales</h4>
            <ListVisualType list={visualType} />
          </StyledVisual>
          <StyledVisual>
            <h4>visuales</h4>
            <ListVisualType list={visuals} />
          </StyledVisual>
        </ContainerVisual>
        <ContainerTimestamp>
          <p>
            Creado en: 
            <time>{timestamp.createdAt}</time>
          </p>
          <p>
            Actulizado el: 
            <time>{timestamp.updateAt}</time>
          </p>
        </ContainerTimestamp>
        <hr/>
        <ContainerDescrip>
          <p>{description}</p>
        </ContainerDescrip>
        <ContainerTags>
          <h4>Etiquetas</h4>
          <div className="tags">
            {tags.map((tags) => (
              <strong>{tags}</strong>
            ))}
          </div>
        </ContainerTags>
      </ContainerInfo>
    </Container>
  );
};
