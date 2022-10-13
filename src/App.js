import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {Routes,Route} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Profile from './pages/Profile'
import {useState,useEffect} from 'react'
function App() {
  const [isAuth,setIsAuth] = useState()
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user-info'))
    if(data) setIsAuth(data)
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/home" element={<Home />} />
        {
          isAuth &&
          <Route path="/profile" element={<Profile />} />
        }
        <Route path="/signin" element={<Signin /> } />
        <Route path="/signup" element={<Signup /> } />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
