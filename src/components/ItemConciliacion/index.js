import React from "react";
import "./styles.js";
import {
  CardBody,
  CardHeader,
  ContainerCard,
  StyledState,
  Tabs,
  ContainerTabs,
} from "./styles.js";
export const ItemConciliacion = ({
  isActive,
  conciliationName,
  sourceA,
  sourceB,
  balance,
  timestamp,
  description,
  tags,
}) => {
  return (
    <ContainerCard>
      <CardHeader>
        <p>
          Nombre Colección: <strong>{conciliationName}</strong>{" "}
        </p>
        <StyledState state={isActive}>
          {isActive ? "Activo" : "Inactivo"}
        </StyledState>
      </CardHeader>
      <hr />
      <CardBody>
        <div className="firstContent">
          <div>
            <p>
              <strong>Fuente A: </strong>
              {sourceA}
            </p>
            <p>
              <strong>Fuente B: </strong>
              {sourceB}
            </p>
            <p>
              <strong>Equilibrio: </strong>
              {balance}
            </p>
          </div>

          <div className="timesTab">
            <p>
              <strong>Creado en: </strong>
              <time>{timestamp.createdAt}</time>
            </p>
            <p>
              <strong> Actulizado el: </strong>
              <time>{timestamp.updateAt}</time>
            </p>
          </div>
        </div>
        <div className="secondContent">
          <div className="description">
            <p>{description}</p>
          </div>
          <ContainerTabs>
            <h6>Etiquetas</h6>
            <Tabs>
              {tags.map((tag) => (
                <strong>{tag}</strong>
              ))}
            </Tabs>
          </ContainerTabs>
        </div>
      </CardBody>
    </ContainerCard>
  );
};
