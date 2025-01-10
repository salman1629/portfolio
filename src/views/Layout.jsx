import { Outlet, useSearchParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import { useEffect, useState } from "react";


export default function Layout (){
    const [contentHeight,setContentHeight] = useState()

    useEffect(()=>{
        let navElement = document.getElementById("navBar")
        if(navElement){
            setContentHeight(navElement.getBoundingClientRect().height)
        }
    },[])
    return (
        < div style={{height:'100vh'}} className="flex flex-col" >
            <NavBar/>
            <main >
               {contentHeight&& <Outlet/>}
               <hr className="mx-5" />
            </main>
            <Footer/>
        </ div >
    )
}