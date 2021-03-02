import React from "react";
import { ItemTablero } from "../../components/ItemTablero";
import { List } from "../../components/List";
import { Loading } from "../../components/Loading";
import { modules } from "../../constants/data";
import { getItemsTablerosSearch } from "../../helpers";

export const Tableros = ({ search, type }) => {
  const [spinner, setSpinner] = React.useState(false);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      setSpinner(true);
      await getItemsTablerosSearch(search, modules, type)
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
            <List list={data} ItemComponent={ItemTablero} />
          )}
        </>
      )}
    </>
  );
};
