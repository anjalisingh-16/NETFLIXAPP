
import './app.scss';
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Mylist from "./pages/mylist/Mylist";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  // const user=true;
  return (
    <>
    <Router>
      <Routes>
    
      <Route   path="/" element={<Register/>}/>
      <Route  path="/home"  element={<Home/>}/>
      <Route path="/movies" element={<Home type="movie"/>}/>
      <Route path="/series" element={<Home type="series"/>}/>
      <Route path="/watch" element={<Watch/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/mylist"} element={<Mylist/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
