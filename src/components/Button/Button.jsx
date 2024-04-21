// import React from 'react'

export default function Button(props) {

    const { title, icon="", href, type= "button" } = props
    return (
        <>
            {!href ? 
                <button type={type} className='w-100 flex justify-center items-center gap-2 bg-[#927CEA] py-2 px-4 rounded-lg text-white'>
                    {icon}{title}
                </button>
                :
                <a href= {href} className='w-max flex justify-center items-center gap-2 font-medium pb-4 rounded-lg text-[#927CEA] text-lg'>
                    {icon}{title}
                </a>
            }
        </>
    )
}
