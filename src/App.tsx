import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import HomePage from './HomePage/HomePage.tsx';
import LoginSignUpPage from "./LoginSignUpPage/LoginSignUpPage.tsx";
import Logo from './assets/gymCrushLogo.png'
import UserOverview from "./UserOverview/UserOverview.tsx";

function App() {
  return <main className="bg-purple-600 h-100%">
    <Link className="logo" to={'/'}>
      <img className="logo w-1/4 object-contain" 
      src={Logo} 
      alt="Gym Crush Logo" />
    </Link>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login-signup" element={<LoginSignUpPage />} />
      <Route path="/user-overview" element={<UserOverview />}/>
    </Routes>
  </main>
}

export default App;