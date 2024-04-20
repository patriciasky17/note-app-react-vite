// import React from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button/Button'
import KokichiPixelBlink from '../assets/Kokichi/Pixel/Kokichi_Oma_Blink.gif'
import StarBackground from '../background/StarBackground'

export default function LoginPage() {
    return (
        <div id='main'>
            <StarBackground />
            <div className='relative flex flex-col justify-center items-center h-screen w-100'>
                <div className="w-100 flex flex-col items-center relative">
                    <img src={KokichiPixelBlink} alt="Kokichi Oma Blinking Pixel" className='absolute top-[-54px] w-[100px]' />
                    <div className="relative z-10 w-100 rounded-md overflow-hidden p-[1.5px]">
                        <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#927CEA_20deg,transparent_120deg)]"></div>
                        <div className='flex flex-col gap-4 relative z-20 p-10 rounded-md w-100 custom-gradient bg-[#11061d]'>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <h1 className='text-2xl'>Login</h1>
                                    <p>Please login with your credentials</p>
                                </div>

                                <div className="flex flex-col">
                                    <TextField label="Email" type="text" placeholder="ex: johndoe@gmail.com" />
                                    <TextField label="Password" type="password" placeholder="Enter your password" />
                                </div>
                            </div>
                            <Button title="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
