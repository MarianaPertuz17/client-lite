import { Home } from './screens/home';
import { routes } from './routes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
