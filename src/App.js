import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="sections">
        <Header />
        <Main />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
