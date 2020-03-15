/*import React,{Component} from 'react';
import SignUp from './SignUp';
import Header from './Header'
import axios from 'axios';*/
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//import { History } from 'react-router';
import {History} from 'react-router';
import { withRouter } from 'react-router'
import Header from './Header';
import Scss from './Scss';
import SignUp from './SignUp';

import axios from 'axios';

class SignIn extends Component
{
   
    state={email:'',password:''}
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
      }
      
      handleChangePassword = event => {
        this.setState({ password: event.target.value });
      } 

      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
         
          email: this.state.email,
          password: this.state.password,
        }
          axios.post('http://localhost:8000/signin',user)
          .then(res => {
            console.log(res);
                     if(res.data.user&&res.data.flag==1)
                     {
                        
                          console.log(res);
               this.setState({userid:res.data.user._id});

                         
                        
                     }
                     else if(res.data.user&&res.data.flag==0){
                      window.location = '/signin';
                     }
                     else if(res.data.user==null)
                     window.location = '/';

          });
        
      }
    render() {
       
      return (
        <div className="root-container">
          
          <Header/>
          <div className="inner-container">
          <div className="header"><h1>LogIn</h1></div>
          <form onSubmit={this.handleSubmit}>
            <div className="box-container">
            <label htmlFor="username">Email</label>
              <div className="input-group">
              <input className="login-input" type="text" name="email" placeholder="Enter email" onChange={this.handleChangeEmail} />
              <br></br>
              </div>
              <label htmlFor="password">Password</label>
              <div className="input-group">
              <input className="login-input" type="password" name="password" placeholder="Enter password"  onChange={this.handleChangePassword} />
              <br></br>
              </div>
              <div className="input-group">
              <button className="login-btn" type="submit">LogIn</button>
              </div>
            
            </div>
          </form>
          </div>
        </div>
      )
    }
    

}

export default SignIn;