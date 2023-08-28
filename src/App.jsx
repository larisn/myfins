
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import NewFins from './components/pages/NewFins'
import MyFins from './components/pages/MyFins';
import Container from './components/layout/Container';
import Nav from './components/layout/nav/Nav';
import Footer from "./components/layout/Footer";
import Fins from './components/pages/Fins';

export default function App() {
  return (
    <Router>
      <Nav />
      <Container customClass="minHeight">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/myfins" element={<MyFins />} />
          <Route path="/newfins" element={<NewFins />} />
          <Route path="/fins/:id" element={<Fins />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}


