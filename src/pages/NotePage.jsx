import {useState} from 'react'
import TabList from '../components/Tabs/TabList'
import Tab from '../components/Tabs/Tab'
import NoteCard from '../components/NoteCard'
import DropdownButton from '../components/Button/DropdownButton'
import FloatingButton from '../components/Button/FloatingButton'
import { PlusIcon, UserIcon } from '@heroicons/react/24/solid'

import KokichiChibiHappy from '../assets/Kokichi/Chibi/Kokichi_Oma_Happy.webp'

export default function NotePage() {
    const [name, setName] = useState('Patricia')
    const [activeTab, setActiveTab] = useState(1);  // Initial active tab index
    const dropdownItems = [
        { label: 'Profile', onClick: () => console.log('Item 1 clicked'), isDanger: false, href: '/profile'},
        { label: 'Log out', onClick: () => console.log('Item 2 clicked'), isDanger: true,  href: ''},
    ];

    return (
        <div className='px-8 py-4 flex flex-col gap-4 min-h-full'>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl'>{name}'s Note</h1>
                <DropdownButton title={<><UserIcon className='w-4'/> {name}</>}items={dropdownItems} isCard={false}/>
            </div>

            <TabList>
                <Tab
                    title="All"
                    isChecked={activeTab === 1}
                    onChange={() => setActiveTab(1)}>

                    <NoteCard 
                        href="#" 
                        title="Note Title" 
                        description="This is a description of the note, So what i want to tell you is something that i shouldn't tell publicly and yeah that's all, thanks for wasting your time" 
                        isUpdated={true}
                        moodSticker={KokichiChibiHappy}
                        alternativeImageDesc="Mood Sticker"
                    />

                    <NoteCard 
                        href="#" 
                        title="Note Title" 
                        description="This is a description of the note, So what i want to tell you is something that i shouldn't tell publicly and yeah that's all, thanks for wasting your time" 
                        isUpdated={true}
                        moodSticker={KokichiChibiHappy}
                        alternativeImageDesc="Mood Sticker"
                    />

                    <NoteCard 
                        href="#" 
                        title="Note Title" 
                        description="This is a description of the note, So what i want to tell you is something that i shouldn't tell publicly and yeah that's all, thanks for wasting your time" 
                        isUpdated={true}
                        moodSticker={KokichiChibiHappy}
                        alternativeImageDesc="Mood Sticker"
                    />

                    <NoteCard 
                        href="#" 
                        title="Note Title" 
                        description="This is a description of the note, So what i want to tell you is something that i shouldn't tell publicly and yeah that's all, thanks for wasting your time" 
                        isUpdated={true}
                        moodSticker={KokichiChibiHappy}
                        alternativeImageDesc="Mood Sticker"
                    />

                    <NoteCard 
                        href="#" 
                        title="Note Title" 
                        description="This is a description of the note, So what i want to tell you is something that i shouldn't tell publicly and yeah that's all, thanks for wasting your time" 
                        isUpdated={true}
                        moodSticker={KokichiChibiHappy}
                        alternativeImageDesc="Mood Sticker"
                    />
                </Tab>
                
                <Tab
                    title="Work"
                    isChecked={activeTab === 2}
                    onChange={() => setActiveTab(2)}>
                    There is no work note in here
                </Tab>

                <Tab
                    title="Personal"
                    isChecked={activeTab === 3}
                    onChange={() => setActiveTab(3)}>
                    There is no personal note in here
                </Tab>

            </TabList>

            <FloatingButton title="Add Note" icon=<PlusIcon className='w-6'/> />
        </div>
    )
}
