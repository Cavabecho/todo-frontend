
function MyComponent() {
   let [flag, setFlag] = React.useState(false);
   const showTitle = () => {
      setFlag(!flag);
   }
  return (
    <div>
      {flag ? <h1>hello</h1> : null}
      <button onClick={getTodos}>get buttoon</button>
      {/* <button onClick={getData}>add buttoon</button>
      <button onClick={getData}>edit buttoon</button>
      <button onClick={getData}>delete buttoon</button> */}

    </div>
  );
}