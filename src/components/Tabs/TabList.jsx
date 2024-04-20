import React from 'react'

export default function Tablist(props) {
    return (
        <div role="tablist" className="tabs tabs-bordered w-100">
            {props.children}
        </div>
    )
}
