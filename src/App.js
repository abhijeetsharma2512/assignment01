import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Userdata from './Userdata';
import deletedata from './deletedata';

function App() {
  return ( 
    <Router>
        
        <Routes>

        <Route path='/reg' element={<Userdata/>}></Route>
        <Route path='/show' element={<deletedata/>}></Route>
    


    






        </Routes>
      
        </Router>
   );
}

export default App;