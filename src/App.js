import logo from './logo.svg';
import './App.css';
import Header from './components/header-component.js';
import Footer from './components/footer-component.js';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
