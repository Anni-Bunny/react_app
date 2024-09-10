export const Header = () => {
    return (
        <header className='flex fixed w-full justify-between py-3 px-3 bg-black text-white'>
            <a className="text-xl" href="/">Space X</a>
            <nav className='flex gap-3'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/missions">Missions</a>
            </nav>
        </header>
    )
}