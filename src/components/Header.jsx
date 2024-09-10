export const Header = () => {
    return (
        <div className='flex justify-between py-3 px-3 bg-black text-white'>
            <a className="text-xl" href="/">Space X</a>
            <nav className='flex gap-3'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/missions">Missions</a>
            </nav>
        </div>
    )
}