function MyApp() {
  return (
    <div className="root">
      <Todos />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);


