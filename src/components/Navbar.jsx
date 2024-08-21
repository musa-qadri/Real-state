import React from 'react'
import Image from 'next/image'

function Navbar() {
    const list = [
        "HOME", "NEWS", "AMENITIES", "LOGO", "LOCATION", "FLOOR PLANS", "About US"
    ]

    const menuItems = [
        { id: 1, name: 'Home', href: '#' },
        { id: 2, name: 'NEWS', href: '#' },
        { id: 3, name: 'AMENITIES', href: '#' },
        { id: 4, name: 'LOGO', href: '#' },
        { id: 5, name: 'LOCATION', href: '#' },
        { id: 6, name: 'FLOOR PLANS', href: '#' },
        { id: 7, name: 'About US', href: '#' },
    ];

    return (
        <div>



            <nav class="bg-transparent relative">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className='border p-1 '>
                        <button type="button" className="text-white  xs:px-4  border-2 font-medium  text-sm sm:px-9 py-2 align-i text-center">RESIDENT PORTAL</button>
                    </div>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="\Frame.png" class="h-6 w-9  sm: hidden md:hidden lg:block" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                        </a>
                        <button data-collapse-toggle="navbar-cta " type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta">

                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">

                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        className={`block py-2 px-3 md:p-0 font-extralight text-white rounded md:bg-transparent ${item.id === 4 && 'font-extrabold text-2xl'}`}
                                        aria-current={item.name === 'Home' ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}


                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar
