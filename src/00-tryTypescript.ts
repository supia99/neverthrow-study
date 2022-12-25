// 参考：https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code-ja

type person = {
  name: string;
  age: number;
};

const taro: person = {
  name: "taro",
  age: 12,
};

console.log(taro);

const sayHelloLinting = (name: string) => {
  console.log(`Hello linting, ${name}`);
};

sayHelloLinting("Jane");
