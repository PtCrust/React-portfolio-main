import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [showModal, setshowModal] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme])

  return (
    <header className='flex'>
      <button className="icon-menu menu flex" onClick={() => {
        setshowModal(true);
      }} />
      <div />
      <nav>
        <ul className='flex'>
          <li><a href='#up'>About</a></li>
          <li><a href='#article'>Articles</a></li>
          <li><a href='#project'>Projects</a></li>
          <li><a href='#contact-us'>Contact</a></li>
        </ul>
      </nav>
      <button className="mode flex" onClick={() => {
        // /////////////////////////////////////////////////////////

        // 1. Send value to local storage
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");

        // 2. Display the value from local storage
        setTheme(localStorage.getItem("currentMode"));

        // ////////////////////////////////////////////////////////
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}>
        <span className={theme ==="light" ? "icon-sun" : "icon-moon"}></span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li >
              <button className="icon-cross" onClick={() => {
                setshowModal(false);
              }} />
            </li>
            <li><a href='#up'>About</a></li>
            <li><a href='#article'>Articles</a></li>
            <li><a href='#project'>Projects</a></li>
            <li><a href='#contact-us'>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}
