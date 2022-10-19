import "serverReq"

function MyComponent() {
   let [flag, setFlag] = React.useState(false);
   const showTitle = () => {
      setFlag(!flag);
   }
  return (
    <div>
      {flag ? <h1>Testing</h1> : null}
      <button onClick={showTitle}>testing buttoon</button>
    </div>
  );
}