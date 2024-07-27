import "./Hero.css"
import Lottie from "react-lottie";
import computerAnimation from "../../animations/computer.json"
import { motion } from "framer-motion";

export default function Hero() {
  const defaultOptionsComputer = {
    loop: true,
    autoplay: true,
    animationData: computerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section id="article" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 7, type: "spring", stiffness: 100 }}

            src="./aiTony-modified.png" className="avatar" alt="avatar" />
          <div className="icon-verified" />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="title">React developer , Software designer and Full stack developer</motion.h1>

        <p className="subTitle">I recently graduated with a degree in ( <b>Computer Science</b> ) from ( <b>Higher Technological Institute</b> ) university. During my academic journey, I gained a comprehensive understanding of <b>web development</b> principles and honed my skills in <b><i>React.js </i></b> through coursework and hands-on projects.</p>

        <div className="all-icons flex">
          <a href="https://web.whatsapp.com/" rel="noreferrer" target="_blank"><span  className="icon-whatsapp icon"/></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><span  className="icon-github icon"/></a>
          <a href="https://www.linkedin.com/in/tony-sameh-377472234/"rel="noreferrer" target="_blank"><span  className="icon-linkedin icon"/></a>
          <a href="#contact-us"><span className="icon-mail icon"/></a>
        </div>
      </div>
      <div className="right-section">
        <Lottie
          options={defaultOptionsComputer}
          width={400}
          height={400}
        />
      </div>
    </section>
  )
}
