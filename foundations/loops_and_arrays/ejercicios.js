let users = [
  {id: 'pacho', name: "Francisco Pacho", age: 28},
  {id: 'carlota', name: "Carlota Smith", age: 24},
  {id: 'mateo', name: "Mateo Pérez", age: 31},
];

// Tu código usando .reduce() para agrupar por id aquí:
function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(users);

console.log(usersById);