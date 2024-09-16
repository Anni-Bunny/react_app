import {useEffect, useState} from "react";

export const Missions = () => {
    const [data, setdata] = useState([])

    async function fetchApi() {
        try {
            const response = await fetch('https://api.spacexdata.com/v3/missions');
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            await setdata(json)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        fetchApi()
    }, []);


    return (
        <section
            className="py-2 container mx-auto flex flex-col space-y-2">
            {data.map(item => (
                <a key={item} href={`${item.wikipedia}`}  target="_blank">
                    <div className="p-6 border border-gray-700 rounded-lg hover:bg-gray-700 bg-black">
                        <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{item.mission_name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                    </div>
                </a>
            ))}
        </section>

    )
}