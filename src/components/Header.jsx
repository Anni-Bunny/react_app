export const Header = () => {
    return (
        <header className='w-full z-50 bg-black text-white fixed'>
            <div className='container mx-auto'>
                <div className='flex justify-between py-3'>
                    <a className="text-xl" href="/">Space X</a>
                    <nav className='flex gap-3'>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <a href="/missions">Missions</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

