export const Header = () => {
    return (
        <header className='w-full z-50 bg-black text-white fixed '>
            <div className='container mx-auto border-b border-amber-800'>
                <div className='flex justify-between py-3'>
                    <a className="text-xl cursor-pointer hover:text-amber-800" href="/">Space X</a>
                    <nav className='flex gap-3'>
                        <a className='hover:text-amber-800' href="/">Home</a>
                        <a className='hover:text-amber-800' href="/about">About</a>
                        <a className='hover:text-amber-800' href="/contact">Contact</a>
                        <a className='hover:text-amber-800' href="/missions">Missions</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

