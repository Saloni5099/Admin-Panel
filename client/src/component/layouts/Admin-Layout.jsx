import { NavLink, Outlet } from "react-router-dom";
import { FaUserAlt,FaHome,FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";


export const AdminLayout = ()=>{
    return (
        <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/"><FaHome/>Home</NavLink></li>
                        <li><NavLink to="/admin/users"><FaUserAlt />users</NavLink></li>
                        <li><NavLink to="/admin/contacts"><FaMessage/>contacts</NavLink></li>
                        <li><NavLink to="/service"><FaRegListAlt/>services</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>          
        </>
    )
}
//outlet is used to go to page of nested route like /admin/user and ./admin/contact

