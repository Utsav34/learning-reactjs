import logo from './logo.svg';
import './App.css';
import UseState from './components/useState/useState';
import UseEffect from './components/useEffect/useeffect';

function App() {
  return (
    <div className="App">
  <h1>HELLO REACT</h1>
  <UseState name="Counter"/>
  <UseEffect/>
    </div>
  );
}

export default App;
