import logo from './logo.svg';
import './App.css';
import './jules.css'

function App() {

  // declaration of var
  const myClasses='App light large'

  return (
    <div className={myClasses}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          yahoo
        </a>
      </header>
    </div>
  );
}

export default App;
