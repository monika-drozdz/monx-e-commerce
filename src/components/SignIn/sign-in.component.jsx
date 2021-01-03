import React, { Component } from 'react';
import FormInput from "../../components/FormInput/form-input.component";
import CustomButton from "../../components/CustomButton/custom-button.component";
import Logo from "../../components/Logo/logo.component";
import {Link} from 'react-router-dom';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = { 
            email: "",
            password: ""
         }
    }
    
    render() { 
        return (
<div>
        <div >
          <Link to='/'>
              <Logo />
            </Link>
        </div>

        <div className="sign-in">
        <h2>MAM JUŻ KONTO</h2>
        <span>ZALOGUJ SIĘ PODAJĄC NAZWĘ UŻYTKOWNIKA I HASŁO</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="nazwa użytkownika"
            required
          />
          <FormInput
            name="password" 
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="hasło"
            required
          />
          <div className='buttons'>
          <CustomButton type="submit"> ZALOGUJ </CustomButton>
          <CustomButton isGoogleSignIn>
            Sign in with google
          </CustomButton>
          </div>

        </form>
      </div>
      </div> );
    }
}
 
export default SignIn;