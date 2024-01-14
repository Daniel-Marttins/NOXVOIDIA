import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
