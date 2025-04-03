
import { Analytics } from "../component/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
    const {user} = useAuth();
    return (
        <>
        <main>
          <section className="section-hero">
             <div className="container grid grid-two-cols">
               <div className="hero-content">
                    <p>Welcome {user?`${user.username} to our website`:"to our website"}!!</p>
                    <h1>Why Choose Us?</h1>
                    <p>Expertise:Our team consistes of experienced IT professionals who are
                    passionate about staying up-to-date with the latest industry trends.
                </p>
                <p>Cutomization:We understand that every business is uniques.That's Why
                    ew create solutions that are related to your specific needs and goals.
                </p>
                <p>Customer-Centric Approach:We prioritize your satisfaction and provide
                    top-notch support to address your IT concerns
                </p>
                <p>Affordability:We offer competetive pricing without compromising on the
                     quality of our services
                </p>
                <p>Reliability:Count on us to be there when you need us.We're commited
                     to ensuring your IT environment is reliable and available 24/7
                </p>
                    <div className="btn btn-group">
                       <a href="/contact">
                          <button className="btn">Connect with Us</button>
                       </a>
                       <a href="/service">
                          <button className="btn secondary-btn">Learn more</button>
                       </a>
                    </div>
               </div>
               <div className="hero-image">
                    <img src="/images/about.png" alt="let's code" width="400" height="400"/>
               </div>
             </div>
          </section>
      </main>
       <Analytics />
        </>
    );
};