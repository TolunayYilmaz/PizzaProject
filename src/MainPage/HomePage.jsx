import { useState } from 'react'
import imageSrc from "../assets/images/iteration-1-images/home-banner.png"
import "./mainmenu.css"
import { Button } from 'reactstrap'
 function mainmenu(){
    


    return(
    <body>
    <img src={imageSrc} className='pageImg' alt="" />
    <main>
        <div className='mid'>
            <p className='header'>Teknolojik Yemekler</p>
            <p>KOD ACIKTIRIR PİZZA,DOYURUR</p>
            <Button>Button</Button>
        </div>
    </main>
    </body>)
}
export default mainmenu