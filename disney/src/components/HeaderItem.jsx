import React from 'react'

function HeaderItem({name,Icon}){
  return (
    <div className="text-white flex items-center gap-3 text-base font-semibold cursor-pointer hover:underline underline-offset-8 mb-2 bg-transparent">
        <Icon className="bg-transparent"/>
        <h2 className="bg-transparent">{name}</h2>
    </div>
  )
}

export default HeaderItem