import React,{useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// class Login extends React.Component
// {
   
//     constructor(props) {
//         super(props);
//         this.state = {
//             Email:"",
//             Password:"",

//         }
        
//     }
//     emailcheck(e){
//         this.setState({Email:e.target.value});
//         console.log(e.target.value);
//         // console.log(e.target.value);
//     }
//     passwordcheck(e){
//          this.setState.Password(e.target.value);
//     }
//     check(e){
//         axios.get('')
//     }
//     render(){
//         return(
//             <div className="container">
//                 <h1>Login</h1>
//                     <div className="form-group">
//                         <label for="Email" >Email</label>
//                         <input type="email" name="email" onChange={this.emailcheck} className="form-control"></input>
//                     </div>

//                     <div className="form-group">
//                         <label for="Password" >Password</label>
//                         <input type="Password" name="Password" onChange={this.passwordcheck} className="form-control"></input>
//                     </div>
//                     <button className="btn btn-primary" onClick={this.check()}>Login</button>
//             </div>
//         )
//     }
// }

// export default Login;
const Login=()=>{
    const[Email,setEmail]= useState("");
    const[Password,setPassword]= useState("");

    const emailcheck=(e)=>{
        setEmail(e.target.value);
        console.log(Email);
    }
    const passwordcheck=(e)=>{
        setPassword(e.target.value);
        console.log(Password);
    }
    const check=(e)=>{
        e.preventDefault();
        const fd = new FormData();
      fd.append('email', Email);
      fd.append('password', Password);

        axios.post('http://localhost:8080/react/login.php',fd).then(res=>{
            if(res.length> 0)
            {
                <Redirect to={'/home'}></Redirect>
            }
            else{
                console.log(res);
            }
            
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
        <div className="container">
                <h1>Login</h1>
                    <div className="form-group">
                         <label for="Email" >Email</label>
                         <input type="email" name="email" onChange={emailcheck}  className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label for="Password" >Password</label>
                        <input type="Password" name="Password" onChange={passwordcheck}  className="form-control"></input>
                    </div>
                    <button className="btn btn-primary" onClick={check}>Login</button>
             </div>
    )

}
export default Login