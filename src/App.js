import './App.css';
import { Routes, Route} from "react-router-dom"

import Home from './screen/Home';
import Goodies from './screen/Goodies';
import Screen3 from './screen/Screen3';
import './App.css'
import 'font-awesome/css/font-awesome.min.css';




function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/goodies' element={ <Goodies />} />
        {/* <Route path='/screen3' element={ <Screen3 />} /> */}
    </Routes>

  </div>
  );
}

export default App;
