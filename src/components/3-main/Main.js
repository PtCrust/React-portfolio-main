import { useEffect, useState } from 'react'
import "./Main.css";
import projectCard from "../db";
import { AnimatePresence, motion } from 'framer-motion';


export default function Main() {
  const [active, setActive] = useState("all");
  const [cards, setCards] = useState([]);

  const getProject = (categoryName) => {
    const data = projectCard.filter((item) => {

      const categoryArr = item.category.filter((categoryItem) => {
        return categoryItem === categoryName;
      })

      return categoryArr[0] === categoryName;
    });

    setCards(data);
  }
  useEffect(() => {
    getProject("project");
  }, []);
  const FileViewer = (cardimgS) => {
    const fileExtension = cardimgS.split('.').pop().toLowerCase();

    if (fileExtension === 'pdf') {
      return <iframe src={cardimgS} title='pdf' style={{ width: "100%"}} allowFullScreen frameBorder={0} />;
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      return <img src={cardimgS} alt="Preview" width={"100%"} />;
    } else {
      return <p>This file type is not supported for preview.</p>;
    }
  }

  return (
    <main id='project' className='flex'>
      <div className='flex left-section'>

        <button className={active === "all" ? "active" : null} onClick={() => {
          setActive("all");
          getProject("project");
        }}>All Projects</button>

        <button className={active === "react" ? "active" : null} onClick={() => {
          setActive("react");
          getProject("react");
        }}>React</button>

        <button className={active === "certificate" ? "active" : null} onClick={() => {
          setActive("certificate");
          getProject("certificate");
        }}>Certificates</button>



        <button className={active === "CV" ? "active" : null} onClick={() => {
          setActive("CV");
          getProject("CV");
        }}>Resume</button>

      </div>
      <div className='flex right-section'>
        {/* Looping on certificates */}
        <AnimatePresence>
          {
            cards.map((card) => (

              <motion.article
                layout
                initial={{ transform: "scale(0.5)" }}
                animate={{ transform: "scale(1)" }}
                // exit={{ transform: "scale(0)" }}
                transition={{type: "spring" ,damping: 8 ,stiffness:80}}
              
              className='card' key={card.id} style={{ width: "17rem" }}>
                
                {FileViewer(card.imgS)}

                <div className='box'>
                  <h1 className='title'>{card.title}</h1>
                  <p className='sub-title'>{card.desc}</p>
                  <div className='flex icons'>
                    <div className='flex' style={{ gap: "11px" }}>
                      <a href={card.github}  target="_blank" rel={"noreferrer"}><span className='icon-github' /></a>
                    </div>
                    <a href={card.link} target="_blank" rel={"noreferrer"} className='more flex'>Go to site<span className='icon-arrow-right' /></a>
                  </div>
                </div>
              </motion.article>

            )
            )
          }
        </AnimatePresence>
      </div>
    </main>
  )
}
