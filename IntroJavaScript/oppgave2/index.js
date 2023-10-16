const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

const userUl = document.getElementById("users");

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const inputName = document.querySelector("#name");
const inputAge = document.querySelector("#age");
const filter = document.querySelector("#filter");

const handleSearch = () => {
  const value = inputName.value.toLowerCase() || inputName.value.toUpperCase();
  // Kan skrive med store eller små bokstaver og få ut resultatet
  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(value)
  );
  createTableUI(filterUsers);
};

inputName.addEventListener("keyup", handleSearch);

const handleFilter = () => {
  const age = inputAge.value;
  const filteredUsers = users.filter((user) => age <= user.age);
  createTableUI(filteredUsers);
};

filter.addEventListener("click", handleFilter);

const main = () => {
  createTableUI(users);
};

main();
