import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';

// function App() {
//   return (
//     <Router>
//     <div className="main-container">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Services" element={<Services />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Blogs" element={<Blogs />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//     </div>
//     <Footer />
//   </Router>
//   );
// }


function App() {
  return (
    <Router>
    <div className="main-container">
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <Blogs/>
      <Contact/>
    <Footer />
    </div>
  </Router>
  );
}


export default App;
