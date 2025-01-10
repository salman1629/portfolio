import { useEffect, useState } from "react";
import styles from "./IntroPage.module.css";
import { useNavigate } from "react-router-dom";

export default function IntroPage() {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);
  const [contentHeight,setContentHeight] = useState()

  const handleClick = (page) => {
    navigate(`/${page}`);
  };

  useEffect(() => {
    setIsAnimate(true);
    let navElement = document.getElementById("navBar")
    if(navElement){
        setContentHeight(navElement.getBoundingClientRect().height)
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-[inherit] " style={{height:`calc(95vh - ${contentHeight}px)`}}>
      <div className="flex gap-11 items-center">
        <div
          className="info-card-container flex flex-col gap-10  rounded-lg"
          style={{ width: "40vh" }}
        >
          <h1 className="font-bold text-7xl">Hello</h1>
          <div>
            <h1 className="font-bold text-2xl">A Bit About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              consectetur aspernatur accusamus, sint neque et ipsum molestiae in
            </p>
          </div>
          <div className="flex gap-5">
            <div
              onClick={() => handleClick("resume")}
              className={`text-black  cursor-pointer hover:bg-white font-bold
              ${styles.circle} 
              ${isAnimate && styles.move1}`}
            >
              <p>Resume</p>
            </div>
            <div
              onClick={() => handleClick("projects")}
              className={`text-black  cursor-pointer hover:bg-white font-bold
              ${styles.circle}
              ${styles.circle2}  
              ${isAnimate && styles.move1}`}
            >
              <p>Projects</p>
            </div>
            <div
              onClick={() => handleClick("contact")}
              className={`text-black cursor-pointer  hover:bg-white font-bold
              ${styles.circle}
              ${styles.circle3} 
              ${isAnimate && styles.move1}`}
            >
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div
          className="photo-container border-2  rounded-full"
          style={{ height: "40vh", width: "40vh" }}
        ></div>
      </div>
    </div>
  );
}
