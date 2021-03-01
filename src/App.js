import './App.css';
import Lounge from './Components/Lounge/Lounge';
import routes from './routes'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Lounge />
      {routes}
    </div>
  );
}

export default App;
