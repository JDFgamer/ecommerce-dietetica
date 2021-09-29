import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';
import { getProductbyName } from '../Actions/index'
import FilterRecipes from './Filters'
import { useAuth0 } from "@auth0/auth0-react";
import {LoginButton} from './Login'
import {LogoutButton} from './Logout'
import {Profile} from './Profile'




function NavBar({getProductbyName}) {

  const [ActualState, setActualState] = useState('')
  const {isAuthenticated} = useAuth0();


  function handleChange(event) {
  
    setActualState(event.target.value)
}


function handleClik() {
    getProductbyName(ActualState)

}



    return (
      <nav className='navbar'>
        <div className='navbar2'>
        <div className='navlink'>
          <NavLink to="/home" className='navlink1' >Home</NavLink>
          <NavLink to="/products" className='navlink1'>Create a New Product</NavLink>
          </div>
          <div className='inputs'>
            <FilterRecipes/>
          </div>
          <div className='busqueda'>
          <input value={ActualState} type='text' placeholder='buscador' className='inputsearch' onChange={handleChange}/>
          <NavLink to='/productname' ><button className='botonsearch' onClick={handleClik}>Search</button></NavLink>
          </div>
          <div>
          { isAuthenticated ? <>
            <LogoutButton/>
          <Profile/>
          </> 
         : <LoginButton/>
}
          </div>

        </div>
  
      </nav>
    );
  };

  const mapStateToProps = (state) => {
    return {
        product: state.product,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProductbyName: name => {
            dispatch(getProductbyName(name))
        },
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)