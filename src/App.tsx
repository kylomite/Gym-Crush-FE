import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import HomePage from './HomePage/HomePage.tsx';
import LoginSignUpPage from "./LoginSignUpPage/LoginSignUpPage.tsx";
import Logo from './assets/gymCrushLogo.png'

function App() {
  return <main className='app'>
    <Link className="logo" to={'/'}>
      <img className="logo w-32 h-32 object-contain" 
      src={Logo} 
      alt="Gym Crush Logo" />
    </Link>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login-signup" element={<LoginSignUpPage />} />
    </Routes>
  </main>
}

export default App;