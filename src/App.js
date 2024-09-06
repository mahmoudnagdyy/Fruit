import './App.css';
import About from './components/About';
import Eat from './components/Eat';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Join from './components/Join';
import Popular from './components/Popular';

import 'animate.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Eat />
      <About />
      <Popular />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
