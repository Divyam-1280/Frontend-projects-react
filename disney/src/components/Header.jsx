import React, { useState } from 'react'
import logo from './../assets/images/logo.png'
import avatar from './../assets/images/avatar.jpg'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from "react-icons/hi2";
import {HiPlus, HiDotsVertical} from "react-icons/hi";
import HeaderItem from './../components/HeaderItem';

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu=[
    {
      name:'HOME',
      icon: HiHome
    },
    {
      name:'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiPlayCircle
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    },
  ]
  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex items-center gap-8">
      <img src={logo} alt="logo" className="w-[80px] md:w-[115px] object-cover " />
      <div className="hidden md:flex gap-8">
      {menu.map((item)=>(
        <HeaderItem name={item.name} Icon={item.icon}/>
      ))}
      </div>
      <div className="flex gap-5 md:hidden">
      {menu.map((item,index)=>index<3&&(
        <HeaderItem name={" "} Icon={item.icon}/>
      ))}
      <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
        <HeaderItem name={""} Icon={HiDotsVertical} />
        {toggle? <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700">
        {menu.map((item,index)=>index>2&&(
        <HeaderItem name={item.name} Icon={item.icon}/>
      ))}
        </div>:null} 
      </div>
      </div>
      </div>
      <img src={avatar} alt="avatar" className="w-[40px] rounded-full" />
    </div>
  )
}

export default Header