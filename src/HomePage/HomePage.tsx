import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import './HomePage.css'

function HomePage() {
  return <main>
    <h1>HOMEPAGE</h1>
    <Link className='login-or-signup' to="/login-signup">
      Login | Create an Account
    </Link>
  </main>
}

export default HomePage;