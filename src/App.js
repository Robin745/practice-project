import './App.css';
import Shop from './components/Shop/Shop';
import Text from './components/Text/Text';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Get Random Watch</h1>
        <h3>Choose 4 watches</h3>
      </header>

      <Shop> </Shop>

      <Text></Text>
    </div>
  );
}

export default App;
