import './App.css';
import Navbar from './navbar/Navbar';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import Page from './Page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useSelector} from "react-redux";

import {useDispatch} from "react-redux";
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <>
    
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route element={<ProtectedRoute/>}>
              <Route path="profile" element={<Page/>} />
            </Route>
            <Route path="signup" element={<SignUp />} />
          </Routes>
      </Router>

    </>
  );

}

export default App;
