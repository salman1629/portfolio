import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Layout() {
  const [contentHeight, setContentHeight] = useState();
  const {setIsTransitioning,isTransitioning} = useContext(AppContext)
  const location = useLocation()

  useEffect(() => {
    let navElement = document.getElementById("navBar");
    if (navElement) {
      setContentHeight(navElement.getBoundingClientRect().height);
    }
  }, []);
  return (
    <div style={{ height: "100vh",overflow:isTransitioning ? 'hidden' : 'unset' }} className="flex flex-col">
      <NavBar />
      <main>
        <TransitionGroup>
          <CSSTransition 
          key={location.key}
          classNames={'fade'}
          timeout={600}
          onEnter={() => setIsTransitioning(true)}
          onExited={() => setIsTransitioning(false)}
            >
           <div className="router-wrapper" >
           {contentHeight && <Outlet />}
            <hr className="mx-5" />
           </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </div>
  );
}
