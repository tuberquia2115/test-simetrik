import conciliaciones from "./conciliaciones.json";
import fuetnes from "./fuetnes.json";
import tableros from "./tableros.json";
import usuarios from "./usuarios.json";

export const modules = [
  {
    name: "Conciliaciones",
    type: "conciliaciones",
    items: conciliaciones,
  },
  {
    name: "Fuentes",
    type: "fuentes",
    items: fuetnes,
  },
  {
    name: "Tableros",
    type: "tableros",
    items: tableros,
  },
  {
    name: "Usuarios",
    type: "usuarios",
    items: usuarios,
  },
];
