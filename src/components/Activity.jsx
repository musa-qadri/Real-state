import React from 'react'



export default function Activity() {

    
    const cardData = [
        {
          imgSrc: "/activity1.png",
          title: "Noteworthy technology acquisitions 2021",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          link: "#"
        },
        {
          imgSrc: "/activity2.png",
          title: "Another major acquisition",
          description: "Details about another significant acquisition in the tech world.",
          link: "#"
        },
        {
          imgSrc: "/activity3.png",
          title: "Tech trends to watch",
          description: "The biggest trends in technology for the coming year.",
          link: "#"
        },
        {
            imgSrc: "/activity3.png",
            title: "Tech trends to watch",
            description: "The biggest trends in technology for the coming year.",
            link: "#"
          },
          {
            imgSrc: "/activity1.png",
          title: "Noteworthy technology acquisitions 2021",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          link: "#"
          },
          {
            imgSrc: "/activity2.png",
            title: "Another major acquisition",
            description: "Details about another significant acquisition in the tech world.",
            link: "#"
          }
      ];



    return (

        <div className="bg-[url('/activityBg.png')] bg-cover bg-center flex justify-around xs:flex-row xxs:flex-col flex-wrap items-center w-full h-auto  xs:pt-24 xxs:pt-10">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cardData.map((card, index) => (
                    <div key={index} className="max-w-sm bg-transparent text-white items-center text-center">
                        <a href={card.link}>
                            <img src={card.imgSrc} className="mx-auto" alt="Card Image" />
                        </a>
                        <div className="p-5">
                            <a href={card.link}>
                                <h5 className="mb-3 text-1xl font-bold tracking-tight dark:text-white">{card.title}</h5>
                            </a>
                            <p className="mb-3 font-thin">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>







        </div>
    )
}
