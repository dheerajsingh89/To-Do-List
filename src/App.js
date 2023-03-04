import './App.css';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Update from './Updat/Update.js';
import HomePage from './HomePage';
import Read from './Read/Read';

function App() {
  return (
  <Router>
     <Routes>
     <Route path='/' element={<HomePage></HomePage>}/>
     <Route path='/read' element={<Read/>}/>
    <Route path='/update/' element={<Update></Update>}/>
     </Routes>
  </Router>
  );
}
export default App;
