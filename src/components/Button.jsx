export function Button() {
    return <button
        className="overflow-hidden group/button relative border border-amber-800 p-2 transition duration-200 flex">
        <span className="invert">LEARN MORE</span>
        <div
            className="group-hover/button:top-[-100%] left-0 absolute bg-white w-full h-full top-full transition-all duration-600">
        </div>
    </button>;
}