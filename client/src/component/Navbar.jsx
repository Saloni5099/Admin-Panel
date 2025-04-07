import { NavLink } from "react-router-dom"
import "./Navbar.css";
import { useAuth } from "../store/auth";

//we use Navlink instead of <a> tag because it ignores refreshing navigation bar
export const Navbar = () => {
  const {isLoggedIn} = useAuth();
    return (
        <>
          <header>
            <div className = "container">
                <div className = "logo-brand">
                  <a href="/">ThapaTechnical</a>
                </div>

                <nav>
                    <ul>
                        <li><NavLink to="/">        Home      </NavLink></li>
                        <li><NavLink to="/about">   About Us  </NavLink></li>
                        <li><NavLink to="/service"> Service   </NavLink></li>
                        <li><NavLink to="/contact"> Contact Us</NavLink></li>
                        {isLoggedIn?(<li><NavLink to="/logout">Logout</NavLink></li>):(<>
                          <li><NavLink to="/login">   Login     </NavLink></li>
                          <li><NavLink to="/register">Register  </NavLink></li>
                        </>
                      )}
                    </ul>
                </nav>
            </div>
          </header>
        </>
    )
}