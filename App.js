import React, {useState, useEffect} from 'react'
import Cover from './components/cover/Cover';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])
  return (
    <div className="App">
    <Navbar isScrolling={scrollHeight} />
     <Cover />
     <Info />
     <Footer />
    </div>
  );
}

export default App;
