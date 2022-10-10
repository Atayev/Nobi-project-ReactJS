import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signin" element={<Signin /> } />
        <Route path="/signup" element={<Signup /> } />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
