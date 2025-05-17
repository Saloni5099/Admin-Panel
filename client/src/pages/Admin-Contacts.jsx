import { useEffect } from "react"
import { useAuth } from "../store/auth";
import { useState } from "react";
import { toast } from "react-toastify";

export const AdminContacts = ()=>{
    const [contactData,setContactData] = useState([]);
    const {authorizationToken} = useAuth();
    const getContactsData = async()=>{
        try {
        const response = await fetch("http://localhost:5000/api/admin/contacts",{
            method:"GET",
            headers:{
                Authorization:authorizationToken,
            },
        });
        const data = await response.json();
        console.log("contacts data: ",data);
        if(response.ok){
            setContactData(data);
        }
        } catch (error) {
           console.log(error);  
        }
    };
    const deleteContactById = async(id)=>{
         try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,
                {
                    method:"DELETE",
                    headers:{
                        Authorization:authorizationToken,
                    },
                }
            )
            if(response.ok){
                getContactsData();
                toast.success("Updated Successfully")
            }
            else{
                toast.error("Not Updated yet");
            }
         } catch (error) {
            console.log(error);
         }
    }
    useEffect(()=>{
        getContactsData();
    },[]);
    return (
        <>
          <section className="admin-contacts-section">
            <div className="container">
            <h1>Admin Contact Data</h1>
            </div>
            <div className="admin-contact">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>message</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                  <tbody>
                   {contactData.map((curContactData,index)=>{
                    const{username,email,message,_id} = curContactData;
                    return(
                        <tr key={index}>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{message}</td>
                            <td className="delete-col"><button onClick={()=>deleteUser(curUser._id)}>Delete</button></td>
                            </tr>
                    )
                })}
            </tbody>
            </table>
            </div>
          </section>
        </>
    )
}