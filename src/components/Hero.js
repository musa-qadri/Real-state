import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
    return (
        <div class="bg-[url('/herobg.png')] bg-cover bg-center  w-full h-[650px] relative">
            <div className='w-full text-center '>

                    <img src="\Rectangle 1.png" class="h-full right-0  absolute" alt="herobg" />
              
                    <div class='top-44  absolute  ' style={{ display:'flex', flexDirection:'column' , justifyContent:'center'  , width:'100%' }}>
                    <img src="\heroHeading.png" class=" w-[60%] h-[60%] mx-auto  " alt="herobg" />
                       <p class="    text-orange-400 xs:text-xs sm:text-sm">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. CONSEQUAT  </p>
                       <p  class="    text-orange-400 xs:text-xs sm:text-sm " >NIBH VITAE TELLUS MASSA ACCUMSAN. LEO ODIO</p>
                    </div>
            </div>
                <Navbar />

        </div>
    )
}
