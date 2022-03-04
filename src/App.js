import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import AboutMe from "./components/AboutMe";
// import Portfolio from "./components/Portfolio";
// import Contacts from "./components/Contacts";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//     </div>
    
//   );
// }

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
