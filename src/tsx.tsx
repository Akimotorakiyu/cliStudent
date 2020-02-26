function render() {
  return <h1>hello</h1>;
}

Reflect.set(window, "renderTsx", render);

export { render };
