function Counter() {
const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </>
  );
}

function App() {
  ReactDOM.createRoot(document.getElementById("root").render(<Counter />));
}

App();
