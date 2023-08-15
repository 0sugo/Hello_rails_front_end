import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
