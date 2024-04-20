// import React from 'react'
import DropdownItem from "./DropdownItem"

export default function DropdownButton(props) {
  const { title, items, isCard } = props

  return (
    <div className={"dropdown dropdown-end"}>
      <div tabIndex={0} role="button" className={"btn " + (isCard ? "bg-transparent border-none hover:bg-transparent p-0 " : '')}>{title}</div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-md w-52 border-[0.75px] border-[#FFFFFF25]">
        {items.map((item, index) => (
          <DropdownItem key={index} label={item.label} onClick={item.onClick} isDanger={item.isDanger} />
        ))}
      </ul>
    </div>
  )
}
