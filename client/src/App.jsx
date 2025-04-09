import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Service } from "./pages/Service";
import { Error }  from "./pages/Error";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer/Footer";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./component/layouts/Admin-Layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";

const App = () => {
  return <>
    <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/service" element={<Service />} />
           <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login />} />
           <Route path="/logout" element={<Logout />} />
           <Route path="*" element={<Error />} />
           <Route path="/admin" element={<AdminLayout/>}>
               <Route path="users" element={<AdminUsers/>}/>
               <Route path="contacts" element={<AdminContacts/>}/>
           </Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  </>
};
export default App;