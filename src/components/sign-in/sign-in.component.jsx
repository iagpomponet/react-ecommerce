import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(){
    super();

    this.state = {
      'email': '',
      'password': ''
    }
  }

  handleSubmit = async (event) =>{
    event.preventDefault();

    const { email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email : '', password: ''});
    }
    catch(error){
      console.log(error);
    }

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
          <FormInput type="password" name="password" label='password' required value={this.state.password} handleChange={this.handleChange} />


          <div className="buttons">
            <CustomButton type="submit" >
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn; 