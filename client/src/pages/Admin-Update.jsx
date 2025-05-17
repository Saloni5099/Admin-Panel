import { useEffect, useState } from "react"
import {useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";

export const AdminUpdate = () => {
    const [data,setData]=useState({
        username:"",
        email:"", 
        phone:"",
    });
// console.log("Hello");
const params = useParams();
console.log("param single user",params);
const {authorizationToken} = useAuth();

const getSingleUserData = async () => {

    try {
        const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,
            {
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            }
        );
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }
        const data = await response.json();
        
        // console.log("Fetched data:", json);
        if (data?.data) {
            console.log("Fetched data:", JSON.stringify(data, null, 2));
            setData(data.data);
        } else {
            console.log("Fetched data:", JSON.stringify(data, null, 2));
            toast.error("User data not found");
        }
        console.log("Fetched data:", JSON.stringify(data, null, 2));
        // setData(data.userData); 
        
    } catch (error) {
        console.log(error);
    }
}
    useEffect(()=>{
        getSingleUserData();
    },[]);
    
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({...data,[name]:value,});
    };
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,
            {
                method:"PATCH",
                headers:{
                   "Content-Type":"application/json",                   Authorization:authorizationToken,
                },
                body:JSON.stringify(data),
            }
            );
            if(response.ok){
                toast.success("Updated successfully");
                navigate("/admin/users"); 
            }
            else{
                toast.error("Still not updated");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    return (
        <>
          <section className="section-contact">
                <div className="contact-content container">
                  <h1 className="main-heading ">Update</h1>
                </div>
                {/* contact page main */}
                    <div className="container grid grid-two-cols">
    
                    {/* contact form content actual */}
                        <section className="section-form">
                            <form onSubmit={handleSubmit} >
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input
                                    type="text"
                                    name="username"
                                    placeholder="username"
                                    id="username"
                                    
                                    value={data.username}
                                    onChange={handleInput}
                                    required
                                    />
                                </div>
    
                                <div>
                                <label htmlFor="email">email</label>
                                    <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    id="email"
                                    autoComplete="off"
                                    value={data.email}
                                    onChange={handleInput}
                                    required
                                    />
                                </div>  
    
                                {/* label is useful for blind people .it help them by pronouncing*/}
                                <div>
                                <label htmlFor="phone">Mobile</label>
                                <input
                                    type="phone"
                                    name="phone"
                                    placeholder="phone"
                                    id="phone"
                                    autoComplete="off"
                                    value={data.phone}
                                    onChange={handleInput}
                                    required
                                ></input>  
                                </div>   
                                
                                <div>
                                   <button type="update">Update</button>
                                </div>
                            </form>
                        </section>
                        </div> 
          </section>
        </>
        )
}