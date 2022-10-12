import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Main from "./pages/Main";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin /> } />
        <Route path="/signup" element={<Signup /> } />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
