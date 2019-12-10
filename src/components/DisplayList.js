import React, { Component } from 'react'  
import axios from 'axios'  
  
const error ={    
    color: 'red',    
    fontWeight:'bold',    
    fontSize:'14'    
}    
  
export class DisplayList extends Component {  
    constructor(props) {  
        super(props)  
      
        this.state = {  
            users:[],  
             errorMessage:""  
        }  
    }  
      
    componentDidMount(){  
        axios.get('https://reqres.in/api/users/')  
        .then(response => {  
            console.log(response.data.data)  
            this.setState({  
                users:response.data.data  
            })  
        })  
        .catch(error =>{  
            this.setState({  
                errorMessage:"Error fetching data"  
            })  
        })  
    }  
    render() {  
        const {users,errorMessage} = this.state  
        console.log(users.length)  
        return (  
            <div>  
                List of Users  
                {  
                    users.length?  
                    users.map(user=> <div key={user.id}><img src={user.avatar} alt={user.first_name}/>{user.first_name + " "+ user.last_name}</div>):  
                    null                      
                }  
                {errorMessage ? <div style={error}>{errorMessage}</div> : null}  
            </div>  
        )  
    }  
}  
  
export default DisplayList  