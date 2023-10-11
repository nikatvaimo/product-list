import logo from './logo.svg';
import './App.css';
import List from "./List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product list</h1>
      </header>
      <section style={{maxWidth: '1440px', margin: '0 auto'}}>
        <List />
      </section>
    </div>
  );
}

export default App;
