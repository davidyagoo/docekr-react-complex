import "./App.css";
import Fib from "./components/Fib";
import OtherPage from "./components/OtherPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
          <div>
            <Link to="/">Go Home</Link>
          </div>
          <div>
            <Link to="/otherpage">Go to Other Page</Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
