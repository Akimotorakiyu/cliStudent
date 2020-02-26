const hello = () => {
  const str = "hello world!111";
  console.log(...str);
};

hello();

Reflect.set(window, "helloBabel", hello);
