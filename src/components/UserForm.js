import React, { Component } from 'react'  
import axios from 'axios'  
  
class UserForm extends Component {  
    constructor(props) {  
        super(props)  
  
        this.state = {            
            first_name: "",  
            last_name: "",  
            email: ""  
        }  
    }  
  
    onChangeHandler = (e) => {  
        this.setState({ [e.target.name]: e.target.value })         
    }  
  
    onSubmitHandler = (e) => {  
        e.preventDefault();  
        console.log(this.state)  
        axios.post('https://reqres.in/api/users/',this.state)  
        .then(response=>{  
            console.log(response)  
        })  
        .catch(error => {  
            console.log(error)  
        })  
    }  
  
    render() {  
        const { first_name, last_name, email } = this.state  
        return (  
            <div>  
                <form onSubmit={this.onSubmitHandler}>                     
                    <div>  
                        Email : <input type="text" name="email" value={email} onChange={this.onChangeHandler} />  
                    </div>  
                    <div>  
                        First Name : <input type="text" name="first_name" value={first_name} onChange={this.onChangeHandler} />  
                    </div>  
                    <div>  
                        Last Name : <input type="text" name="last_name" value={last_name} onChange={this.onChangeHandler} />  
                    </div>  
                    <button type="submit">Submit</button>  
                </form>  
            </div>  
        )  
    }  
}  
  
export default UserForm