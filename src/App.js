import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Toez!
        </p>
        <a
          className="App-link"
          href="https://www.google.com/search?q=toes&sxsrf=APq-WBsNJtLNLlYcPFtqs9lA7BFoKQ8t1A:1647293248171&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi2qpfHxcb2AhWYqXIEHWqOBCMQ_AUoAXoECAIQAw&biw=1440&bih=696&dpr=2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your toes. Hand them over.
        </a>
      </header>
    </div>
  );
}

export default App;
