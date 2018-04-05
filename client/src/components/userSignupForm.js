import React from "react";
import API from "../utils/API"

class UserSignupForm extends React.Component{
    
    state= {
        email:'',
        password:'',
        isAuthenticated: false
    }

    handleFormChange = event => {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value
        });
        console.log(this.state);
    };

    signUpFormSubmit = event => {
          event.preventDefault();
          API.saveUser({
            email: this.state.email,
            password: this.state.password
          }).then(alert("You've Signed Up! Please sign in to continue...")).catch(err => console.log(err));
    };

    logInFormSubmit = event => {
        event.preventDefault();
        API.getUser({
            email: this.state.email,
            password: this.state.password
          }).then(data => {
                if(!data.data){
                    console.log("User Does Not Exist")
                   alert("User Does Not Exist! ")
                }
                else{
                    console.log("User Authenticated", data)
                    alert("Signed In!")
                    this.setState({
                        isAuthenticated: true
                    })

                }
            })
    }

    render(){
        return(
            <form onSubmit={this.signUpFormSubmit}>
                <input
                value={this.state.email}
                onChange={this.handleFormChange}
                id="Email"
                type="email"
                name="email"
                placeholder="Enter email"
                />
                <input
                value={this.state.password}
                onChange={this.handleFormChange} 
                id="Password" 
                name="password" 
                type="password" 
                placeholder="Enter Password"/>
                <button onClick={this.signUpFormSubmit}> Create Account </button>
                <button onClick={this.logInFormSubmit}> Sign In </button>
            </form>
        )
    }
};

export default UserSignupForm;

