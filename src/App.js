import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
// import SignOff from './pages SignOff';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<SignIn />} />
          {/* <Route path='/sign-off' element={<SignOff />} /> */}
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/offers' element={<Offers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
