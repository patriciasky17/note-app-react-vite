// import React from 'react'
import DropdownButton from './Button/DropdownButton'
import './components.css'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'

export default function NoteCard(props) {
    const {href, title, description, isUpdated, moodSticker, alternativeImageDesc} = props

    const dropdownItems = [
        { label: 'Edit Note', onClick: () => console.log('Item 1 clicked'), isDanger: false},
        { label: 'Remove Note', onClick: ()=>document.getElementById('my_modal_5').showModal(), isDanger: true },
    ];
    
    return (
        <a href={href} className='relative px-4 pb-4 rounded-md custom-gradient max-w-[300px] max-h-[320px] w-100 flex flex-col gap-4 overflow-hidden'>
            <div className="flex flex-col z-10 relative">
                <div className="flex justify-between items-center pt-2">
                    <h2 className='text-lg font-semibold'>{title}</h2>
                    <DropdownButton title=<EllipsisVerticalIcon className='w-6 h-6 text-[#927CEA]'/> items={dropdownItems} isCard={true} />
                </div>
                
                <p className='text-sm line-clamp-3 pr-4'>{description}</p>
            </div>
            <p className='text-xs'>{isUpdated ? "Updated by" : "Created by"} <time dateTime="2008-02-14 20:00">February 14, 2008</time></p>
            <img src={moodSticker} alt={alternativeImageDesc} className='-z-10 absolute w-[120px] -bottom-1 right-0 opacity-20'/>
        </a>
    )
}
