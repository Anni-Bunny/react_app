export const About = () => {
    return (
        <>
            <section className="bg-[url('https://sxcontent9668.azureedge.us/cms-assets/assets/Rocket_Garden_0828232579_456787510e.JPG')] bg-cover bg-fixed h-dvh py-14">
            </section>

            <section className='py-20 bg-black text-white'>
            <div className='container mx-auto space-y-10 text-start text-lg'>
                    <h1 className='font-bold text-xl text-center'>ABOUT SPACE X</h1>
                    <h2>SpaceX, or Space Exploration Technologies Corp., is an American aerospace manufacturer and space
                        transportation company founded by Elon Musk in 2002. The company's main goals are to reduce the
                        cost
                        of space travel and to make space exploration more accessible. Here are some key aspects of
                        SpaceX:</h2>
                    <ol className="list-decimal pl-6 space-y-6">
                        <li className='space-y-4 pb-10 border-b'>
                            <h1>
                                Reusable Rockets: SpaceX is renowned for its development of reusable rocket technology.
                                The
                                Falcon 9, one of their main rockets, is designed to be reused multiple times, which
                                significantly reduces the cost of launching payloads into space. Their Falcon Heavy
                                rocket
                                is
                                the most powerful operational rocket in the world and is also partially reusable.
                            </h1>
                            <img
                                src="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_Test_2_Launch_Checkpoint_20231118_DSC_04675_2_723d9ca7e0.jpg"
                                alt='reusable rockets'
                                className="h-full"/>
                        </li>
                        <li className='space-y-4 pb-10 border-b'>
                            <h1>Falcon Rockets: The Falcon 1 was SpaceX's first orbital rocket, and it was followed by
                                the
                                Falcon 9 and Falcon Heavy. The Falcon 9 is the workhorse of SpaceX’s fleet, while the
                                Falcon
                                Heavy is one of the most powerful operational rockets in the world.</h1>
                            <img src="https://www.spacex.com/static/images/backgrounds/f9_video.jpg" alt="falcon9"/>
                        </li>
                        <li className='space-y-4 pb-10 border-b'>
                            <h1>Dragon Spacecraft: The Dragon spacecraft, developed by SpaceX, is designed for cargo and
                                crew
                                missions. The Cargo Dragon, or Dragon 1, has been used to transport supplies to the
                                International Space Station (ISS). The Crew Dragon, or Dragon 2, is designed for crewed
                                missions
                                and is used to transport astronauts to and from the ISS.</h1>
                            <img src="https://www.spacex.com/static/images/crew-2/return/Launches_Crew-1_Approach_Desktop.jpg" alt="dragon spacecraft"/>
                        </li>
                        <li className='space-y-4 pb-10 border-b'>
                            <h1>Starship: SpaceX is developing the Starship spacecraft, which is intended for missions
                                to the
                                Moon, Mars, and beyond. Starship is a fully reusable spacecraft that aims to carry large
                                numbers
                                of passengers and cargo.</h1>
                            <img
                                src="https://www.spacex.com/vehicles/starship/assets/images/Starbase_Desktop.jpg"
                                alt="Starship"/>
                        </li>
                        <li className='space-y-4 pb-10 border-b'>
                            <h1>Starlink: SpaceX is also working on the Starlink project, which aims to create a global
                                broadband network using a constellation of small satellites in low Earth orbit. The goal
                                is to
                                provide high-speed internet access to underserved and remote areas around the
                                world.</h1>
                            <img
                                src="https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_G11_1_San_Ynez_3186_Desktop_673ed35bcb.jpg"
                                alt="Starlink"/>
                        </li>
                        <li className='space-y-4 pb-10 border-b'>
                            <h1>Mars Colonization: One of SpaceX’s long-term goals is to establish a human settlement on
                                Mars.
                                This ambitious objective drives much of the company's research and development
                                efforts.</h1>
                            <img
                                src="https://sxcontent9668.azureedge.us/cms-assets/assets/Starship_Flight3_Launch_Remote_Gateway_129_A9251_5b57c3c6be.jpg"
                                alt="Mars Colonization"/>
                        </li>
                    </ol>
            </div>
            </section>
        </>
    )
}