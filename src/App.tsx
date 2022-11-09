import { Home } from './screens/home';
import { routes } from './routes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Login } from './screens/login';
import { SignUp } from './screens/signup';
import { IGuestData } from './interfaces';
import { guestService } from './services/guestService';


function App() {

  const postGuest = async (guest: IGuestData) => {
    // const {res, error} = await guestService.postGuest(guest);
    // if (!error) alert(res);
    // else alert(res);
  }

  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home/>}/>
        <Route path={routes.LOGIN} element={<Login/>}/>
        <Route path={routes.SIGNUP} element={<SignUp postGuest={postGuest}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
