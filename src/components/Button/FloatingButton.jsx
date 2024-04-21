// import React from 'react'

export default function FloatingButton(props) {

    const { title = "", icon = "", href } = props
    return (
        <>
            {!href ? 
                <button className='fixed bottom-[32px] right-[32px] w-max py-4 px-8 bg-[#927CEA] rounded-full text-lg text-white flex items-center gap-2'>
                    {icon} {title}
                </button>
                :
                <a href= {href} className='fixed bottom-[32px] right-[32px] w-max py-4 px-8 bg-[#927CEA] rounded-full text-lg text-white flex items-center gap-2'>
                    {icon} {title}
                </a>
            }
        </>
    )
}
