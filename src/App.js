import './App.css';
import { Routes, Route} from "react-router-dom"

import Header from './components/templates/Header';
import Home from './screen/Home';
import Goodies from './screen/Goodies';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/goodies' element={ <Goodies />} />
    </Routes>
  </div>
  );
}

export default App;
