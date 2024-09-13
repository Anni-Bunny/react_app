export const Home = () => {
    return (
        <div>
            <section className="bg-[url('https://sxcontent9668.azureedge.us/cms-assets/assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg')] bg-cover h-dvh py-14">
                <div className='container mx-auto relative h-full'>
                    <div className='absolute bottom-12 flex-col space-y-4'>
                        <h1 className='text-white font-bold text-5xl max-w-[50rem] text-start'>ADVANCING HUMAN SPACEFLIGHT</h1>
                        <button className='overflow-hidden group/button relative border border-amber-800 p-2 transition duration-200 flex'>
                            <span className="invert">LEARN MORE</span>
                            <div className='group-hover/button:top-[-100%] left-0 absolute bg-white w-full h-full top-full transition-all duration-600 '></div>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-[url('https://sxcontent9668.azureedge.us/cms-assets/assets/make_life_multiplanetary_desktop_3fa7cff73c.jpg')] bg-cover h-dvh py-14">
                <div className='container mx-auto relative h-full'>
                    <div className='absolute bottom-12 flex-col space-y-4'>
                        <h1 className='text-white font-bold text-5xl max-w-80 text-start'>TO MAKE LIFE MULTIPLANETARY</h1>
                        <button className='overflow-hidden group/button relative border border-amber-800 p-2 transition duration-200 flex'>
                            <span className="invert">LEARN MORE</span>
                            <div className='group-hover/button:top-[-100%] left-0 absolute bg-white w-full h-full top-full transition-all duration-600'></div>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}