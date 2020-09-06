import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  console.log('currentUser :>> ', currentUser);
  return (
    <div className='header'>
      <Link className="logo-container" to="/">
          <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>
          SHOP
        </Link>
        <Link className="option" to='/contact'>
          CONTACT
        </Link>
        <span>
          {currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/login">SIGN IN</Link>}
        </span>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
} 

export default connect(mapStateToProps)(Header);