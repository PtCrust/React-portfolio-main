import './App.css';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Footer from './components/5-footer/Footer';
import Contact from './components/4-contact/Contact';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const [showBtn, setShowBtn] = useState(false);

  return (
    <div id='up'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
      <a style={{ opacity: showBtn? 1 : 0, transition: "1s" }} href='#up'>
        <button className='icon-circle-up scrollToTop' />
      </a>
    </div>
  );
}

export default App;
