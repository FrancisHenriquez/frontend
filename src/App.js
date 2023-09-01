import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Users } from './users/pages/Users';
import { NewPlace } from './places/pages/NewPlace';

const App = () => {
  return (

    <Router>
      <Routes>
      
      <Route path='/users' element={<Users/>}/>
      <Route path='/newplace' element={<NewPlace/>}/>
      <Route path="/*" element={ <Users />} />
      </Routes>
      
        
      
    </Router>
    
  );
}

export default App;
