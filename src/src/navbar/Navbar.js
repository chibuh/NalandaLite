import React from "react";
import {useSelector} from 'react-redux';

export default function Navbar(props) {

  const state = useSelector(state => state.login)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid" >
        <a className="navbar-brand text-white fw-bolder fs-5" style={{margin: '0px 0px 0px 20px'}} href="/">NALANDA</a>
        <form className="d-flex">
            {/* !localStorage('token')? */}
            <a className="navbar-brand text-white-50 fs-6" >{state}</a>
        </form>
      </div>
    </nav>
  );
}
