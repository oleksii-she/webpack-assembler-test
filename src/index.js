import "./styles/index.scss";

const userstack = {
  language: "JavaScript",
  framework: "Angular",
};

const user = {
  name: "Oleksii",
  age: "30",
  ...userstack,
};
console.log(user);
