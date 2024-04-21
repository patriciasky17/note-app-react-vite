// import React from 'react'
import StarBackground from '../../background/StarBackground'
import Button from '../../components/Button/Button'
import DropdownButton from '../../components/Button/DropdownButton'
import { ChevronLeftIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { ChibiKokichiOmaHappy } from '../../assets/Kokichi/Chibi';

export default function DetailNotePage() {
    const dropdownItems = [
        { label: 'Edit Note', onClick: () => console.log('Item 1 clicked'), isDanger: false},
        { label: 'Remove Note', onClick: ()=>document.getElementById('my_modal_5').showModal(), isDanger: true },
    ];

    return (
        <div id='main'>
            <StarBackground />
            <div className='w-full min-h-[100vh] flex flex-col gap-4 p-8'>
                <div className="flex justify-between items-center pt-2">
                    <Button title='Back' href='/' icon={<ChevronLeftIcon className='w-8' />}/>
                    <DropdownButton title={<><EllipsisVerticalIcon className='w-6 h-6 text-[#927CEA]'/> <p>More</p></>} items={dropdownItems} isCard={false} />
                </div>
                

                <div className="flex gap-4 justify-center items-center opacity-100">
                    <img src={ChibiKokichiOmaHappy} className='w-12' alt="Kokichi Chibi Happy" />
                    <p className='text-xl italic'>I was feeling <b>happy</b> when I write this note</p>
                    <img src={ChibiKokichiOmaHappy} className='w-12' alt="Kokichi Chibi Happy" />
                </div>

                <div className="relative flex flex-col gap-2 p-8 rounded-lg border-[0.5px] border-purple-500 bg-[#927CEA25] overflow-hidden">
                    <h1 className='text-2xl font-bold'>Note Title</h1>
                    <p className='text-md'>This is a description of the note, So what i want to tell you is something that i shouldn't tell publicly and yeah that's all, thanks for wasting your time.</p>
                </div>
            </div>
        </div>
    )
}
