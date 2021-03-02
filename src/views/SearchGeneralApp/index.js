/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { ComponentFilter } from "../../components/ComponentFilter";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { SearchInput } from "../../components/SearchInput";
import { Tabs } from "../../components/Tabs";
import { modules } from "../../constants/data";
import { Conciliaciones } from "../../containers/Conciliaciones";
import { Fuentes } from "../../containers/Fuentes";
import { Tableros } from "../../containers/Tableros";
import { Usuarios } from "../../containers/Usuarios";
import { getItemsFuentesSearch, getItemsSearch } from "../../helpers";
import {
  ContainerMain,
  ContainerSearch,
  StyledFiltros,
  StyledMain,
} from "./styles";

const SearchGeneralApp = () => {
  const [type, setType] = React.useState("text");
  const [search, setSearch] = React.useState("");
  const [typeModule, setTypeModule] = React.useState("");
  const [data, setData] = React.useState([]);

  const [spinner, setSpinner] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      setSpinner(true);
      await getItemsSearch(search, modules, type, typeModule)
        .then((res) => {
          setTimeout(() => {
            setData(res.data);
            setSpinner(false);
          }, 2000);
        })
        .catch((error) => console.log(error));
    };
    getData();
  }, [search, typeModule, type]);

  React.useEffect(() => {
    const getData = async () => {
      setSpinner(true);
      await getItemsFuentesSearch(search, modules, type)
        .then((res) => {
          setTimeout(() => {
            setData(res.data);
            setSpinner(false);
          }, 2000);
        })
        .catch((error) => console.log(error));
    };
    getData();
  }, [search, typeModule, type]);

  const renderModule = (typeModule, data) => {
    switch (typeModule) {
      case "conciliaciones":
        return <Conciliaciones list={data} />;
      case "fuentes":
        return <Fuentes list={data} />;
      case "tableros":
        return <Tableros list={data} />;
      case "usuarios":
        return <Usuarios list={data} />;
      default:
        return <Conciliaciones list={data} />;
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
          <SearchInput type={type} value={search} onchange={(value) => setSearch(value)} />
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
              <div style={{ textAlign: "center", padding: "2rem" }}>
                NO se ha realizado ninguna Busquedad
              </div>
            ) : (
              <>
                {spinner ? (
                  <Loading />
                ) : (
                  <>
                    {data.length === 0 ? (
                      <div>No se encontraron resultados</div>
                    ) : (
                      renderModule(typeModule, data)
                    )}
                  </>
                )}
              </>
            )}
          </StyledMain>
        </div>
      </ContainerMain>
    </>
  );
};

export default SearchGeneralApp;
