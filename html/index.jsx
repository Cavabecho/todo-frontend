function MyApp() {
  const [log, setLog] = React.useState(!false);

  const login = () => {
    setLog(!log);
  };

  return (
    <div className="root">
      {log ? <Todos logChange={login} />: <LogIn logIn={login} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);


