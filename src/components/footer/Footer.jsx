

export default function Footer(){
    return (
        <footer className="p-5 pb-16 px-10">
            <div className="flex justify-between" >
                <div className="flex flex-col items-center gap-3" >
                    <p className="font-bold text-lg" >Phone</p>
                    <p>+91 9553331021</p>
                </div>
                <div className="flex flex-col items-center gap-3" >
                    <p className="font-bold text-lg" >Email</p>
                    <p>syamsalman0@gmail.com</p>
                </div>
                <div className="flex flex-col items-center gap-3" >
                    <p className="font-bold text-lg" >Linkedin</p>
                    <a href="www.linkedin.com/in/ssr1629" target="_blank" />
                </div>
            </div>
           
        </footer>
    )
}