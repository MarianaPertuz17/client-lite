import { Home } from './screens/home';
import { routes } from './routes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Login } from './screens/login';
import { SignUp } from './screens/signup';
import { Companies } from './screens/companies';
import { Dashboard } from './screens/dashboard';
import { Company } from './screens/companyDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home/>}/>
        <Route path={routes.LOGIN} element={<Login/>}/>
        <Route path={routes.SIGNUP} element={<SignUp/>}/>
        <Route path={routes.COMPANIES} element={<Companies/>}/>
        <Route path={routes.COMPANY} element={<Company/>}/>
        <Route path={routes.DASHBOARD} element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
