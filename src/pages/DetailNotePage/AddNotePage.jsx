import React, {useState} from 'react'

import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";
import CustomRadioButton from '../../components/Button/CustomRadioButton/CustomRadioButton';
import { 
    ChibiKokichiOmaAngry, 
    ChibiKokichiOmaConfused, 
    ChibiKokichiOmaDefault, 
    ChibiKokichiOmaHappy, 
    ChibiKokichiOmaSad, 
    ChibiKokichiOmaScared, 
    ChibiKokichiOmaShocked } 
from '../../assets/Kokichi/Chibi';

import StarBackground from '../../background/StarBackground';
import Button from '../../components/Button/Button';

export default function AddNotePage() {
    const [selected, setSelected] = useState('');

    const handleChange = (value) => {
        setSelected(value);
    };

    const CustomRadioGroup = () => {
        return(
            <div className="form-control gap-0">
                <div className="label">
                    <span className="label-text">Select the mood for this note</span>
                </div>
            
                <div className="flex flex-row md:flex-nowrap flex-wrap">
                    <CustomRadioButton
                        name="my_radio_group"
                        value="neutral"
                        isSelected={selected === 'neutral'}
                        onChange={handleChange}
                        label="Neutral"
                        imgSrc={ChibiKokichiOmaDefault}
                    />
                    <CustomRadioButton
                        name="my_radio_group"
                        value="happy"
                        isSelected={selected === 'happy'}
                        onChange={handleChange}
                        label="Happy"
                        imgSrc={ChibiKokichiOmaHappy}
                        />
                    <CustomRadioButton
                        name="my_radio_group"
                        value="sad"
                        isSelected={selected === 'sad'}
                        onChange={handleChange}
                        label="Sad"
                        imgSrc={ChibiKokichiOmaSad}
                    />
                    <CustomRadioButton
                        name="my_radio_group"
                        value="scared"
                        isSelected={selected === 'scared'}
                        onChange={handleChange}
                        label="Scared"
                        imgSrc={ChibiKokichiOmaScared}
                    />
                    <CustomRadioButton
                        name="my_radio_group"
                        value="shocked"
                        isSelected={selected === 'shocked'}
                        onChange={handleChange}
                        label="Shocked"
                        imgSrc={ChibiKokichiOmaShocked}
                    />
                    <CustomRadioButton
                        name="my_radio_group"
                        value="confused"
                        isSelected={selected === 'confused'}
                        onChange={handleChange}
                        label="Confused"
                        imgSrc={ChibiKokichiOmaConfused}
                    />
                    <CustomRadioButton
                        name="my_radio_group"
                        value="angry"
                        isSelected={selected === 'angry'}
                        onChange={handleChange}
                        label="Angry"
                        imgSrc={ChibiKokichiOmaAngry}
                    />
                </div>
            </div>
            
        )
    };

    return (
        <div id='main'>
            <StarBackground />
            <div className='p-8 flex flex-col'>
                <h1 className="text-3xl font-semibold">Add Note Page</h1>
                <form method='post' className="flex flex-col gap-4 py-4">
                    <CustomRadioGroup />
                    <TextField 
                        className = "w-100"
                        label="Title" 
                        type="text" 
                        placeholder="Enter your title" 
                    />
                    <TextArea
                        label="Description"
                        placeholder="Enter your description"
                    />
                    <Button title="Add Note" type="submit" />
                </form>
                
            </div>
        </div>
    )
}
