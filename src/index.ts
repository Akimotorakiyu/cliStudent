import "./print";
import "./helloBabel";
import "./jsx";
import "./tsx";

const hello = () => {
  const str = "hello world!111";
  console.log(...str);
};

hello();

Reflect.set(window, "helloBabelFromTS", hello);
