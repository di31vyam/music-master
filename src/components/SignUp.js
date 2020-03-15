import React from 'react';
import axios from 'axios';
import Search from './Songs';
import {Link} from 'react-router-dom';
import Header from './Header';

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }
  
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }
  
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  }



  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password

    }
  // console.log(user);
    axios.post('http://localhost:8000/signup',user)
      .then(res => {
        console.log(res.data);
        
      });

      window.location = '/signin';
      
     
      

   /* axios.get('http://localhost:8000/users')
      .then(res=>{
          console.log(response);
      });*/
  }

  render() {
      console.log(this.state);
    return (
      <div className="root-container">
          <Header />
          <div className="inner-container">
          <div className="header"><h1>SignUp</h1></div><br/>
          
        <form onSubmit={this.handleSubmit}>
            <div className="box-container">
            <label htmlFor="username">Username</label>
            <div className="input-group">
            <input className="login-input" type="text" name="name" placeholder="Enter name" onChange={this.handleChangeName} /><br/>
            </div>
            <div className="input-group">
            <input className="login-input" type="email" name="email" placeholder="Enter email" onChange={this.handleChangeEmail} /><br/>
            </div>
            <div className="input-group">
            <input className="login-input" type="password" name="password" placeholder="Enter password"  onChange={this.handleChangePassword} /><br/>
            </div>
            <div className="input-group">
             <button className="login-btn" type="submit">Register</button>
             </div>
             </div>
        </form>
        </div>
        <Link to='/signin'></Link>
        
        

      </div>
    )
  }
}
export default SignUp;