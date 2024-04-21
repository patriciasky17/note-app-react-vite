// import React from 'react';

export default function CustomRadioButton({ name, value, isSelected, onChange, label, imgSrc }) {
    return (
        <div className="p-2 md:w-screen sm:w-1/4 w-1/2 md:min-w-[80px]">
            <label className={`flex flex-col justify-center items-center md:gap-4 gap-2 label rounded-lg cursor-pointer ${isSelected ? 'border-2 border-[#927CEA] bg-[#927CEA25]' : 'border border-gray-300'}`}>
                <img src={imgSrc} alt={label} className='md:w-16 w-12' />
                <span className={`label-text text-md ${isSelected ? 'font-medium' : 'font-normal'}`}>{label}</span>
                <input
                    type="radio"
                    name={name}
                    className="radio checked:bg-blue-500 hidden"
                    checked={isSelected}
                    onChange={() => onChange(value)}
                />
            </label>
        </div>
    );
}
