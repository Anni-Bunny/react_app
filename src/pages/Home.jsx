import {Button} from "../components/Button";
export const Home = () => {
    return (
        <div>
            <section
                className="bg-[url('https://sxcontent9668.azureedge.us/cms-assets/assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg')] bg-cover h-dvh py-14">
                <div className='container mx-auto relative h-full'>
                    <div className='absolute bottom-12 flex-col space-y-4'>
                        <h1 className='text-white font-bold text-5xl max-w-[50rem] text-start'>ADVANCING HUMAN
                            SPACEFLIGHT</h1>
                        <a className='block' href="/spaceflight">
                            <Button/>
                        </a>
                    </div>
                </div>
            </section>
            <section
                className="bg-[url('https://sxcontent9668.azureedge.us/cms-assets/assets/make_life_multiplanetary_desktop_3fa7cff73c.jpg')] bg-cover h-dvh py-14 bg-fixed">
                <div className='container mx-auto relative h-full'>
                    <div className='absolute bottom-12 flex-col space-y-4'>
                        <h1 className='text-white font-bold text-5xl max-w-80 text-start'>TO MAKE LIFE
                            MULTIPLANETARY</h1>
                        <a className='block' href="/multiplanetary">
                            <Button/>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}