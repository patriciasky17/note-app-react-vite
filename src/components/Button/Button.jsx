// import React from 'react'

export default function Button(props) {

    const { title } = props
    return (
        <>
            <button className='w-100 bg-[#927CEA] p-2 rounded-lg text-white'>
                {title}
            </button>
        </>
    )
}
