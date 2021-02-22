import './App.css';
import Lounge from './Components/Lounge/Lounge';
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Lounge />
      {routes}
    </div>
  );
}

export default App;
