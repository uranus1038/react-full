import './App.css';
import {BrowserRouter as Router , Navigate, Route , Routes} from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

//Pages 
import Home from './Pages/Home.js';
import LoginUser from './Pages/LoginUser';
function App(CokieKey) {
  const cookie_key = 'namedOFCookie';
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {(read_cookie(cookie_key)!="") ? <Route path="/login" element={<Navigate to="/"/>}/>:
          <Route path="/login" element={<LoginUser/>}/>}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
