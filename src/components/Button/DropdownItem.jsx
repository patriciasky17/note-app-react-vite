// import React from 'react'

export default function DropdownItem(props) {
    const {label, onClick, href, isDanger} = props
    return (
        <li onClick={onClick} className={isDanger ? "text-red-500" : ""}>
            {!href ? 
                <p>{label}</p> : // Use a paragraph tag when there's no link
                <a href={href}>{label}</a> // Use an anchor tag when href is provided
            }
        </li>
    )
}
