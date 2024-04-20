import {useState} from 'react'
import TabList from '../components/Tabs/TabList'
import Tab from '../components/Tabs/Tab'
import NoteCard from '../components/NoteCard'

export default function NotePage() {
    const [name, setName] = useState('Patricia')
    const [activeTab, setActiveTab] = useState(1);  // Initial active tab index

    return (
        <div className='px-8 py-4 flex flex-col gap-4'>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl'>Catatan Milik {name}</h1>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Click</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>

            <TabList>
                <Tab
                    title="Semua"
                    isChecked={activeTab === 1}
                    onChange={() => setActiveTab(1)}>
                    Content of Tab 1
                </Tab>
                <Tab
                    title="Pekerjaan"
                    isChecked={activeTab === 2}
                    onChange={() => setActiveTab(2)}>
                    Content of Tab 2
                </Tab>
                <Tab
                    title="Pribadi"
                    isChecked={activeTab === 3}
                    onChange={() => setActiveTab(3)}>
                    Content of Tab 3
                </Tab>
            </TabList>
            
            <NoteCard />
                
        </div>
    )
}
