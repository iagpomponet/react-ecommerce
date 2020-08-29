import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(){
    super();

    this.state = {
      'email': '',
      'password': ''
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault();

    this.setState({
      'email': '',
      'password': ''
    })
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name] : value
    })
  }

  render(){
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" label='name' required value={this.state.email} handleChange={this.handleChange} />
          <FormInput type="password" name="password" label='password' required value={this.state.email} handleChange={this.handleChange} />

          <CustomButton type="submit" >
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} >
            Sign In
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn; 