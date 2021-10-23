import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from 'react-router-dom';
import { useEffect, useState } from "react";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  let theme = 'light-theme';
  const getTheme = () => {
    if(localStorage.getItem('theme')){
      theme = localStorage.getItem('theme')
    }
    return theme;
  }

  const [currentTheme, setCurrentTheme] = useState(getTheme())

  useEffect(() => {
    document.documentElement.className = currentTheme;
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme])

  const toggleTheme = () => {
    if(currentTheme === 'light-theme'){
      setCurrentTheme('dark-theme')
    }else{
      setCurrentTheme('light-theme')
    }
  }

  return (
    <Router>
        <Navbar />
        <MainContent />
        <ToggleBtn theme={currentTheme} onToggle={toggleTheme} />
        <Footer />
    </Router>
  );
}

export default App;
