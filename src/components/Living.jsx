import React from 'react'

export default function Living() {
  return (
    <div className='flex  w-full h-auto sm:flex-row xxs:flex-col '>
      <div className='md:w-[50%]  sm:w-[100%]' >
      <img src="\livingpic.png" class=" w-[100%] h-[100%]  " alt="Flowbite Logo" />

      </div>
      <div className=' md:w-[45%] sm:w-[100%] p-5 md:p-16 md:mt-9 mx-auto'>
        <h1 className='text-3xl font-semibold font-sans'>VALUES OF SMART LIVING IN GAMA RESIDENCE</h1>

        <p className='mt-5 mb-4 text-orange-800 text-sm' > LOREM IPSUM DOLOR SIT AMET CONSECTETUR. INTERDUM EGET AC.</p>

        <div className='flex justify-between text-sm  xxs:text-xs font-light'> 
            <ul >
                <li className='pt-2'>5 wellness</li>
                <li className='pt-2'>5 conference</li>
                <li className='pt-2'>5 restaurant</li>
                <li className='pt-2'>5 shopping</li>
            </ul>
            <ul>
                <li className='pt-2'>5 wellness</li>
                <li className='pt-2'>5 conference</li>
                <li className='pt-2'>5 restaurant</li>
                <li className='pt-2'>5 shopping</li>
            </ul>
            <ul>
                <li className='pt-2'>5 wellness</li>
                <li className='pt-2'>5 conference</li>
                <li className='pt-2'>5 restaurant</li>
                <li className='pt-2'>5 shopping</li>
            </ul>
        </div>

      </div>
    </div>
  )
}
