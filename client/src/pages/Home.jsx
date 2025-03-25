import { Analytics } from "../component/Analytics";

export const Home = () => {
     return( 
     <>
      <main>
          <section className="section-hero">
             <div className="container grid grid-two-cols">
               <div className="hero-content">
                    <p>We are the World Best IT Company</p>
                    <h1>Welcome to Thapa Technical</h1>
                    <p>
                         Are you ready to take your business to the next level with
                         cutting-edge IT solution Look no further! At Thapa Technical,
                         we specialize in providing innovative IT services and solutions
                         tailored to meet your unique needs
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