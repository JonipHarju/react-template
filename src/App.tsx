import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import "./App.css";
import Routes from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./countSlice";

function App() {
  // const [count, setCount] = useState(0);

  const countState = useSelector(
    (state: { count: { value: number } }) => state.count.value
  );

  const dispatch = useDispatch();
  return (
    <>
      <Routes />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          sx={{ color: "white", backgroundColor: "green" }}
          variant="contained"
          onClick={() => dispatch(increment())}
        >
          count is {countState}
        </Button>
        <Button
          sx={{ color: "black", backgroundColor: "white" }}
          variant="contained"
          onClick={() => dispatch(decrement())}
        >
          count is {countState}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
