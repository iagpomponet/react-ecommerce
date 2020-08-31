import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/custom-button.component';

import './sign-up.styles.scss'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(){
    super();

    this.state = {
      displayName : '',
      email : '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password != confirmPassword){
      alert('passwords dont match');
      return;
    }

    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName : '',
        email : '',
        password: '',
        confirmPassword: ''
      })
    }
    catch(error){
      console.log(error);
    }
  }

  handleChange = (e) => {
    const { name , value } = e.target;

    this.setState({ [name] : value })
  }

  render(){
    const { displayName, email, password, confirmPassword } = this.state;

    return(
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your e-mail and password</span>
        <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange}></FormInput>
            <FormInput type="email" name="email" value={email} onChange={this.handleChange}></FormInput>
            <FormInput type="password" name="password" value={password} onChange={this.handleChange}></FormInput>
            <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange}></FormInput>
        </form>

        <CustomButton type="submit">SIGN UP</CustomButton>
      </div>
    )
  }
}

export default SignUp;