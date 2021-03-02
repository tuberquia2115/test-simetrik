/**
 * @description Funcion que permite filtrar el modulo seleccionado.
 * @param {string} typeModule Tipo de mpdulo
 * @param {Array} modules Modulos de la plataforma
 */
const getModule = (typeModule, modules) => {
  return modules.filter((module) => module.type === typeModule);
};

const getItemsConciliacionesText = (module, search) => {
  return module[0].items.filter(
    (elm) =>
      elm.conciliationName.toUpperCase().includes(search.toUpperCase()) ||
      elm.sourceA.toUpperCase().includes(search.toUpperCase()) ||
      elm.sourceB.toUpperCase().includes(search.toUpperCase())
  );
};

const getItemsConciliacionesDate = (module, search) => {
  return module[0].items.filter(
    (elm) =>
      elm.timestamp.createdAt.toUpperCase().includes(search.toUpperCase()) ||
      elm.timestamp.updateAt.toUpperCase().includes(search.toUpperCase())
  );
};

const getItemsUsuariosText = (module, search) => {
  return module[0].items.filter(
    (elm) =>
      elm.name.firstName.toUpperCase().includes(search.toUpperCase()) ||
      elm.name.lastName.toUpperCase().includes(search.toUpperCase()) ||
      elm.gender.toUpperCase().includes(search.toUpperCase()) ||
      elm.company.toUpperCase().includes(search.toUpperCase()) ||
      elm.email.toUpperCase().includes(search.toUpperCase()) ||
      elm.address.toUpperCase().includes(search.toUpperCase()) ||
      elm.phone.toUpperCase().includes(search.toUpperCase())
  );
};

// filtros del module de usuarios
const getItemsusuariosDate = (module, search) => {
  return module[0].items.filter((elm) =>
    elm.createdAt.toUpperCase().includes(search.toUpperCase())
  );
};

const getItemsusuariosNumber = (module, search) => {
  return module[0].items.filter((elm) => elm.age === Number(search));
};

// Filtros del modulo de fuentes

const getItemsFuentesText = (module, search) => {
  return module[0].items.filter(
    (elm) =>
      elm.name.toUpperCase().includes(search.toUpperCase()) ||
      elm.company.toUpperCase().includes(search.toUpperCase()) ||
      elm.description.toUpperCase().includes(search.toUpperCase())
  );
};

const getItemsFuentesDate = (module, search) => {
  return module[0].items.filter(
    (elm) =>
      elm.timestamp.createdAt.toUpperCase().includes(search.toUpperCase()) ||
      elm.timestamp.updateAt.toUpperCase().includes(search.toUpperCase())
  );
};

export const getItemsFuentesSearch = (search, modules, typeDate) => {
  return new Promise((resolve, reject) => {
    const module = getModule("fuentes", modules);
    try {
      if(typeDate === "text"){
        const result = getItemsFuentesText(module, search);
        return resolve({ data: result });
      } else if(typeDate === "date") {
        const result = getItemsFuentesDate(module, search);
        return resolve({ data: result });
      }
    } catch (error) {
      reject({ msg: "error de consulta", code: 404 });
    }
  })
}

export const getItemsSearch = (search, modules, typeDate, typeModule) => {
  return new Promise((resolve, reject) => {
    try {
      const module = getModule(typeModule, modules);
      if (typeModule === "conciliaciones") {
        if (typeDate === "text") {
          const result = getItemsConciliacionesText(module, search);
          return resolve({ data: result });
        } else if (typeDate === "date") {
          const result = getItemsConciliacionesDate(module, search);
          return resolve({ data: result });
        }
      } else if (typeModule === "usuarios") {
        if (typeDate === "text") {
          const result = getItemsUsuariosText(module, search);
          return resolve({ data: result });
        } else if (typeDate === "date") {
          const result = getItemsusuariosDate(module, search);
          return resolve({ data: result });
        } else if (typeDate === "number") {
          console.log("typeDate:", typeDate);
          const result = getItemsusuariosNumber(module, search);
          return resolve({ data: result });
        }
      }
      return { data: [] };
    } catch (error) {
      reject({ msg: "error de consulta", code: 404 });
    }
  });
};

