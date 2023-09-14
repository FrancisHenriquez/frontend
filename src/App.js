import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import { Users } from './users/pages/Users';
import { NewPlace } from './places/pages/NewPlace';
import { MainNavigation } from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (

    <Router>
      <MainNavigation />
      <main>
      
      <Route path='/users' element={<Users/>}/>
      <Route path='/newplace' element={<NewPlace/>}/>
      <Route path="/*" element={ <Users />} />
      
      
      </main>
      
    </Router>
    
  );
}

export default App;
