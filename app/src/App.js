import Header from './components/Header';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (

    <div className="App">
      <Header/>
      <main>
      <Gallery /><Gallery />
      </main>
    </div>
  );
}

export default App;
