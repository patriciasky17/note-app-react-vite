import {useState} from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

export default function TextField(props) {

    const {placeholder, label, type} = props
    const [showPassword, setShowPassword] = useState(type === "password" ? true : false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    return (
        <>
            <label className="form-control w-full min-w-[240px]">
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
                <div className='flex items-center relative w-100'>
                    <input type={showPassword ? "password" : {type}} placeholder={placeholder} className="input input-bordered w-full" />
                    { 
                    type === "password" ? 
                        <button onClick={handleClickShowPassword} className="absolute right-2 btn btn-xs bg-transparent border-none">{showPassword ? <EyeIcon className='w-6 text-[#927CEA]'/> : <EyeSlashIcon className='w-6 text-[#927CEA]'/>}</button> 
                        : null
                    }
                </div>

            </label>
        </>
    )
}
