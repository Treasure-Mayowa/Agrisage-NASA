'use client'
import { useState } from "react"


export default function Stats () {

    const [location, setLocation] = useState('')

    const searchData = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <main>
                <form onSubmit={searchData}>
                    <input 
                        value={location}
                        className="m-auto w-3/4 p-1 bg-gray-500 text-white"
                        onChange={(e)=> setLocation(e.target.value)}
                        type="text" placeholder="Enter location" required />
                </form>
            </main>
        </>
    )
}