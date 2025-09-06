import { div, img } from "framer-motion/client"
import React from "react"

const Footer=()=>{
    return (
        <div className="bg-slate-700 text-center p-4">
            <div className="socialLinks flex flex-rows justify-around p-4 mx-16 md:mx-96">
               <a href="https://github.com/Rounit-1st"><img src="/Hyper_Image/github.png " className="h-16"  alt="" /></a>
               <a href="https://codeforces.com/profile/forcerounit"><img src="/img/icons8-codeforces-96.png" className="h-16"  alt="" /></a>
               <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rounitpeppa@gmail.com"><img src="/img/icons8-gmail.svg " className="h-16"  alt="" /></a>
               <a href="https://www.codechef.com/users/chefrounit"><img src="/img/icons8-codechef.svg" className="h-16"  alt="" /></a>
            </div>

            © Copylefted by Mr Dogesh company
            <div className="flex  p-8 text-sm text-left md:px-96">
                This website definetly doesn't represent Rounit Kashyap Frontend skills and his dumb sense of humour, all right reserved
            </div>
        </div> 
    )
}


export default Footer;