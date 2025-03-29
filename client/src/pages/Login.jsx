import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const URL = "http://localhost:5000/api/auth/login";
export const Login = () => {
        const [user,setUser] = useState({
            email:"",
            password:""
        });
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
            ...user,
            [name]:value,
        });
    };    

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    // handling the form submission
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
               const response = await fetch(URL,{
               method:"POST",
               headers:{
                 "Content-Type":"application/json",
               },
               body:JSON.stringify(user)
            });
            console.log("login",response);
            if(response.ok){
                alert("Login successfully");
                const res_data = await response.json();
                storeTokenInLS(res_data.token);
                //localStorage.setItem("token",res_data.token);
                setUser({email:"",password:""});
                navigate("/");
            }
            else{
                alert("invalid credentials");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <>
      <section>
        <main>
            <div className="section-login">
                <div className="container grid grid-two-cols">
                    <div className="login-image">
                        <img
                            src="/images/login.png"
                            alt="a girl is trying to do login"
                            width="400"
                            height="400"
                        />
                    </div>
                    <div className="login form">
                        <h1 className="main-heading mb-3">Login form</h1>
                        <br />
                        <form onSubmit={handleSubmit}>   
                            <div>
                            <label htmlFor="email">email</label>
                                <input
                                type="email"
                                name="email"
                                placeholder="email"
                                id="email"
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput}
                                />
                            </div>
                            <div>
                            <label htmlFor="password">password</label>
                                <input
                                type="password"
                                name="password"
                                placeholder="password"
                                id="password"
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                                />
                            </div>   
                                <br/>
                                <button type="submit" className="btn btn-submit">
                                    Login
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
      </section>
    </>
}