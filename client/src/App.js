import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Viewport from './components/Viewport.js';

const SignUp = () => ()

const SignIn = () => ()

const ForgotPassword = () => ()

const ResetPassword = () => ()

const Project = () => ()

const App = () => (
  <Router>
    <Route exact path="/" component={Project} />
  </Router>
)

// class App extends Component {
//   render() {
//     return (
//         <div className="App">
//           <Sidebar />
//           <main>
//             <Header />
//             <Viewport />
//             <Footer />
//           </main>
//         </div>
//     );
//   }
// }

export default App;
