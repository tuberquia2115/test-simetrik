import React from "react";
import { ItemFuente } from "../../components/ItemFuente";
import { List } from "../../components/List";
import { Loading } from "../../components/Loading";
import { modules } from "../../constants/data";
import { getItemsFuentesSearch } from "../../helpers";

export const Fuentes = ({ search, type }) => {
  console.log("search:", search, type)
  const [spinner, setSpinner] = React.useState(false);
  const [data, setData] = React.useState([]);
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
  }, [search, type]);
  return (
    <>
      {spinner ? (
        <Loading />
      ) : (
        <>
          {data.length === 0 ? (
            <div>No se encontraron resultados</div>
          ) : (
            <List list={data} ItemComponent={ItemFuente} />
          )}
        </>
      )}
    </>
  );
};
