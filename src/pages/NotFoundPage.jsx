// import React from 'react'
import { PixelKokichiOmaSigh } from '../assets/Kokichi/Pixel'
import '../index.css'
import StarBackground from '../background/StarBackground'
import Button from '../components/Button/Button'

export default function NotFoundPage() {
    return (
        <div id='main'>
            <StarBackground />
            <div className='w-full min-h-[100vh] flex flex-col justify-center items-center gap-4'>
                <img className="min-w-[100px]" src={PixelKokichiOmaSigh} alt="Kokichi Chibi is Confused" />
                <div className="flex flex-col text-center gap-2">
                    <h1 className='text-2xl font-bold'>Page Not Found</h1>
                    <p className='text-lg'>The page that you search for is not available</p>
                </div>

                <Button title='Back to Home' href='/'/>
            </div>
        </div>
    )
}
