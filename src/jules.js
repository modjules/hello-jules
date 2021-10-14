import "./App.css";
import "./jules.css";

function App() {
  // declaration of var
  const myClasses = "App light large";

  return (
    <div className={myClasses}>
      <div className="main tall flex row">
        <div className="A">
          <strong>My goals</strong>
          <ul>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="B flex grow column">
         <div className="C">
         <h1> GO Jules</h1>
        </div>
        <div className="H">
          <p>Any Text</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
