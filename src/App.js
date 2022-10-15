import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {Routes,Route} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Profile from './pages/Profile'
import { useState, useEffect } from 'react'
import Settings from "./components/Settings";
import Posts from "./components/Posts";
import CalendarOwn from "./components/CalendarOwn";
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
          <>
            <Route path="/profile" element={<Profile />}>
              <Route path="/profile/posts" element={<Posts />} />
              <Route path="/profile/settings" element={<Settings />} />
              <Route path="/profile/calendar" element={<CalendarOwn />} />
            </Route>
            
          </> 
        }
        <Route path="/signin" element={<Signin /> } />
        <Route path="/signup" element={<Signup /> } />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
