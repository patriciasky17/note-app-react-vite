// import React from 'react'

export default function TextArea(props) {

    const {placeholder, label} = props

    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <textarea className="textarea textarea-bordered h-24" placeholder={placeholder}></textarea>
        </label>
    )
}
