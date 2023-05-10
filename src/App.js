import logo from './logo.svg';
import './App.css';
import Header from './common/header/header';
import HeaderMenu from './common/header/headerMenu';

function App() {
  return (
    <>
    <Header title="Home Page" desc="My Home page content" />
      <Header title="About Page" desc="My About page content" />
      <div className="App">
        <header className="App-header">
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
    </>
  );
}

export default App;
