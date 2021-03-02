/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { ComponentFilter } from "../../components/ComponentFilter";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { SearchInput } from "../../components/SearchInput";
import { Tabs } from "../../components/Tabs";
import { modules } from "../../constants/data";
import { Conciliaciones } from "../../containers/Conciliaciones";
import { Usuarios } from "../../containers/Usuarios";
import { getItemsSearch } from "../../helpers";
import { ContainerMain, ContainerSearch, StyledFiltros } from "./styles";

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
  }, [search]);

  const renderModule = (typeModule, data) => {
    switch (typeModule) {
      case "conciliaciones":
        return <Conciliaciones list={data} />;
      case "fuetnes":
        return <h3>fuetnes</h3>;
      case "tableros":
        return <h4>tableros</h4>;
      case "usuarios":
        return <Usuarios list={data}/>;
      default:
        return <Conciliaciones list={data} />;
    }
  };
  return (
    <>
      <Header title="Buscador General" />
      <ContainerMain>
        <ContainerSearch>
          <SearchInput type={type} onchange={(value) => setSearch(value)} />
        </ContainerSearch>
        <div style={{ display: "flex", width: "100%" }}>
          <StyledFiltros>
            <Tabs listTabs={modules} setTab={setTypeModule} tab={typeModule} />
            <ComponentFilter setType={setType} type={type} />
          </StyledFiltros>
          <main
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
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
          </main>
        </div>
      </ContainerMain>
    </>
  );
};

export default SearchGeneralApp;
