import React from 'react'

export default function Modren() {

    const images = [
        "/modern3.png",
        "/modern4.png",
        "/modern5.png",
        "/modern6.png"
    ];


    return (

        <div className='' >
            <div className='md: w-[80%] sm:w-full  xxs:mx-auto lg:p-32 md:p-20 sm:p-16 xxs:p-2 flex  xs:justify-center sm:justify-center md:justify-around xxs:flex-col md:flex-row xs:flex-col ' >
                <div className=' md: w-[10%] sm:w-3/4 xxs:mx-auto xxs:w-full sm:align-item '>
                    <h1 className='font-serif md:mt-10  lg:text-4xl tracking-[2px] md:text-3xl sm:text-3xl xxs:text-2xl' >MODERN SPACES AND PREMIUM APARTMENT COMPLEXES</h1>
                    <p className='text-orange-700 xxs:text-sm xs:mt-5 sm:mt-10 tracking-[0.25em]' >WELCOME TO GAMA </p>
                    <p className='text-orange-700 xxs:text-sm  tracking-[0.25em]' > RESIDENCE SHOWCASE</p>
                    <img src="\arrow.png" class="h-[40px] w-18 mt-10 xs:mx-auto sm:mx-0" alt="Flowbite Logo" />

                </div>

                <div className=" md:w-[60%] sm:w-full xxs:mx-auto  xxs:pt-5 ">
                    <div className="relative md:w-[37vw] sm:w-[60vw]  p-0">
                        <img
                            src="/modernpic.png"
                            className="h-[55vh] w-full object-cover"
                            alt="Primary Image"
                        />
                        <div className="absolute top-28 md:left-36 sm:left-60 xs:left-36 xxs:left-20 md:w-[27vw] sm:w-[39vw] xs:w-[38vw] xxs:w-[58vw] ">
                            <img
                                src="/modern2.png"
                                className="sm:h-[58vh]  xs:h[50vh]  w-full"
                                alt="Overlay Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="bg-[url('/modernbg.png')] bg-cover bg-center flex justify-around xs:flex-row xxs:flex-col flex-wrap items-center w-full  xs:pt-0 xxs:pt-10">
                {images.map((src, index) => (
                    <div key={index} className=" xs:w-[20vw] xxs:w-[38vw] flex justify-center xs:pt-20 xxs:pt-6  xs:pb-14 xxs:pb-6">
                        <img src={src} alt={`Modern Image ${index + 1}`} />
                    </div>
                ))}
            </div>

        </div>
    )
}
