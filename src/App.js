import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Users } from './users/pages/Users';
import { NewPlace } from './places/pages/NewPlace';
import { MainNavigation } from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (

    <Router>
      <MainNavigation />
      <main>
      <Routes>
      <Route path='/users' element={<Users/>}/>
      <Route path='/newplace' element={<NewPlace/>}/>
      <Route path="/*" element={ <Users />} />
      </Routes>
      
      </main>
      
    </Router>
    
  );
}

export default App;
