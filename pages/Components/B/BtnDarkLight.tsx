import React from 'react'
import { PiSunDimFill, PiMoonFill } from 'react-icons/pi'

const BtnDarkLight = () => {
    return (
        
            <div className='flex flex-wrap items-center gap-4 bg-[#3ecece] px-6 py-3 justify-center rounded-full text-xl text-[#4b4949]'>
                <span className="" ><PiMoonFill /></span>
                <span className="" ><PiSunDimFill /></span>
            </div>
    )
}

export default BtnDarkLight
