/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { ComponentFilter } from "../../components/ComponentFilter";
import { Header } from "../../components/Header";

import { SearchInput } from "../../components/SearchInput";
import { Tabs } from "../../components/Tabs";
import { modules } from "../../constants/data";
import { Conciliaciones } from "../../containers/Conciliaciones";
import { Fuentes } from "../../containers/Fuentes";
import { Tableros } from "../../containers/Tableros";
import { Usuarios } from "../../containers/Usuarios";
import {
  ContainerMain,
  ContainerSearch,
  Message,
  StyledFiltros,
  StyledMain,
} from "./styles";

const SearchGeneralApp = () => {
  const [type, setType] = React.useState("text");
  const [search, setSearch] = React.useState("");
  const [typeModule, setTypeModule] = React.useState("");

  const renderModule = (typeModule) => {
    switch (typeModule) {
      case "conciliaciones":
        return <Conciliaciones search={search} type={type} />;
      case "fuentes":
        return <Fuentes search={search} type={type} />;
      case "tableros":
        return <Tableros search={search} type={type} />;
      case "usuarios":
        return <Usuarios search={search} type={type} />;
      default:
        return <Conciliaciones search={search} type={type} />;
    }
  };
  const getTypeModule = (type) => {
    setTypeModule(type);
    setSearch("");
  };
  return (
    <>
      <Header title="Buscador General" />
      <ContainerMain>
        <ContainerSearch>
          <SearchInput
            type={type}
            value={search}
            onchange={(value) => setSearch(value)}
          />
        </ContainerSearch>
        <div style={{ display: "flex", width: "100%" }}>
          <StyledFiltros>
            <Tabs
              listTabs={modules}
              setTab={(v) => getTypeModule(v)}
              tab={typeModule}
            />
            <ComponentFilter setType={setType} type={type} />
          </StyledFiltros>
          <StyledMain>
            {search === "" ? (
              <div>
              <Message >
                <h4>No se ha realizado una busqueda.</h4>
                <p>
                  Selecciona el modulo al cual va a realizar el Filtro,
                  seguidamente diligencia el campo de busqueda y da click en
                  "BUSCAR", también podrá filtrar por tipo de dato.
                </p>
              </Message>
              </div>
            ) : (
              renderModule(typeModule)
            )}
          </StyledMain>
        </div>
      </ContainerMain>
    </>
  );
};

export default SearchGeneralApp;
