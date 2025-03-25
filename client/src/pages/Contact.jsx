import { useState } from "react";
export const Contact = () => {
    const [contact,setContact] = useState({
        username:"",
        email:"",
        message:""
    });
const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
        ...contact,
        [name]:value,
    });
};    
// handling the form submission

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
}
    return (
    <>
      <section className="section-contact">
            <div className="contact-content container">
              <h1 className="main-heading ">Contact Us</h1>
            </div>
            {/* contact page main */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img
                            src="/images/webdev.png"
                            alt="we are always ready to help"
                            width="400"
                            height="400"
                        />
                    </div>   

                {/* contact form content actuel */}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                type="text"
                                name="username"
                                placeholder="username"
                                id="username"
                                autoComplete="off"
                                value={contact.username}
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
                                value={contact.email}
                                onChange={handleInput}
                                required
                                />
                            </div>  

                            {/* label is useful for blind people .it help them by pronouncing*/}
                            <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                autoComplete="off"
                                cols="30"
                                rows="6"
                                value={contact.message}
                                onChange={handleInput}
                                required
                            ></textarea>  
                            </div>   
                            
                            <div>
                               <button type="submit">Submit</button>
                            </div>
                        </form>
                    </section>
                    </div> 
                    <section>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.49183037905!2d80.33838275!3d26.44717370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1742641654610!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </section>
      </section>
    </>
    )
}