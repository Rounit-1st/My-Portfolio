import { div, img } from "framer-motion/client"
import React from "react"

const Footer=()=>{
    return (
        <div className="bg-slate-700 text-center p-4">
            <div className="socialLinks flex flex-rows justify-around p-4 mx-16 md:mx-96">
               <a href=""><img src="./About_cards/git.png " className="h-16"  alt="" /></a>
               <a href=""><img src="./About_cards/git.png " className="h-16"  alt="" /></a>
               <a href=""><img src="./About_cards/git.png " className="h-16"  alt="" /></a>
               <a href=""><img src="./About_cards/git.png " className="h-16"  alt="" /></a>
            </div>

            © Copylefted by Mr Dogesh company
            <div className="flex  p-8 text-sm text-left md:px-96">
                This website definetly doesn't represent Rounit Kashyap Frontend skills and his dumb sense of humour, all right reserved
            </div>
        </div> 
    )
}


export default Footer;