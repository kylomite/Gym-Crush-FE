import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import HomePage from './HomePage/HomePage.tsx';
import LoginSignUpPage from "./LoginSignUpPage/LoginSignUpPage.tsx";

function App() {
  return <main className='app'>
    <Link className="logo" to={'/'}>
      <h1 >Gym Crush</h1>
    </Link>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login-signup" element={<LoginSignUpPage />} />
    </Routes>
  </main>
}

export default App;