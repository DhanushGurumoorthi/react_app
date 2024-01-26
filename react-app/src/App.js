import logo from './logo.svg';
import './App.css';
import Propscomponent from './components/props';
import Statecomponents from './components/state';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Propscomponent name=" ,Dhanush" user="MERN class."/>
        <Statecomponents/>
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
