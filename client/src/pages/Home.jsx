import { Analytics } from "../component/Analytics";

export const Home = () => {
     return( 
     <>
      <main>
          <section className="section-hero">
             <div className="container grid grid-two-cols">
               <div className="hero-content">
                    <p>We are the World Best IT Company</p>
                    <h1>Welcome to Admin Bridge</h1>
                    <p>
                         Welcome to Your Admin Dashboard
                         Efficiently manage users, monitor data,
                         and stay in control—all in one place.
                         This panel gives you secure access
                         to all administrative tools and insights
                         tailored to keep your system running smoothly and effectively.
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
                    <img src="/images/home.png" alt="let's code" width="400" height="400"/>
               </div>
             </div>
          </section>
      </main>
          <Analytics/>
         
     </>
     );
}