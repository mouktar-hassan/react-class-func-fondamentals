import logo from "./logo.svg";
import "./App.css";
import ClassFondamental from "./components/class/Fondamental";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ClassFondamental />
      </header>
    </div>
  );
}

export default App;
