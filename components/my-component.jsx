function MyComponent() {
   let [flag, setFlag] = React.useState(false);
   const showTitle = () => {
      setFlag(!flag);
   }
  return (
    <div>
      {flag ? <h1>{todo.text}</h1> : null}
      <button onClick={getData}>testing buttoon</button>
    </div>
  );
}