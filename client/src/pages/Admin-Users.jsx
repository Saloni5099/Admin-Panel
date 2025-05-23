import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {Link} from "react-router-dom";
export const AdminUsers = ()=>{
    const [users,setUsers] = useState([]);
    const {authorizationToken, API} = useAuth();
    const getAllUsersData = async () =>{
        try {
            const response = await fetch(`${API}/api/admin/users`,{
                method:"GET",
                headers:{
                    Authorization: authorizationToken,//from the context api>>auth.jsx
                }
            });
            const data = await response.json();
            // console.log("Fetched Data : ", data);

            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    const deleteUser = async (id)=>{
        try {
            const response = await fetch(`${API}/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization: authorizationToken,//from the context api>>auth.jsx
                }
            });
            const data = await response.json();
            console.log("Deleted User : ", data);
            if(response.ok){
                getAllUsersData();
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
       getAllUsersData();
    },[authorizationToken]);
    return(
        <>
        <section className="admin-user-section">
        <div className="container">
            <h1> Admin User Data</h1>
        </div>
        <div className="container admin-users">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(users) && users.map((curUser, index)=>{
                        return<tr key={index}>
                            <td>{curUser.username}</td>
                            <td>{curUser.email}</td>
                            <td>{curUser.phone}</td>
                            <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                            <td className="delete-col"><button onClick={()=>deleteUser(curUser._id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    </section>
        </>
    ) 
}