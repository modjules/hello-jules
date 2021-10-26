import "./App.css";
import "./jules.css";

function App() {
  // declaration of var
  const myClasses = "App light large";

  return (
    <div className={myClasses}>
      <div className="main tall flex row">
        <div className="A">
          <strong>Our servises</strong>
          <ul>
            <li>Powder eyebrows</li>
            <li>Shaded eyliner</li>
            <li>Lip blush</li>
          </ul>
        </div>
        <div className="B flex grow column">
         <div className="C flex row">
           <div className="Aboutus">
             <h>About Us</h>
           </div>
           <div className="Ourwork">
             <h>Our work</h>
           </div>
           <div className="Testimonials">
             <h>Testimonials</h>
             </div> 
           <div className="Contact">
             <h>Contact</h>
           </div>
        </div>
        <div className="H">
          <p>Welcome to our studio, where the high-quality Permanent Make-up guaranteed</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
