import React from 'react'
import { File } from "lucide-react";

const actsCard = ({ name, description }) => {
    return (
        <div>
            <div className='bg-[#F5F5F5]/20 rounded-[20px] p-4'>
                <div className="flex items-center justify-between text-xl">
                    <File className="text-white" />
                    <h1 className="flex-grow font-bold pl-3 text-white ">{name}</h1>
                    <File className="text-white" />
                </div>
                <div className='mt-3'>
                    <p className='text-sm text-gray-400'>{description}</p>
                </div>

            </div>
        </div>
    )
}

export default actsCard
