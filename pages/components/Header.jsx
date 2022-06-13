import React from 'react'
import {BadgeCheckIcon,CollectionIcon,HomeIcon,LightningBoltIcon,LightningIcon,SearchIcon,UserIcon} from "@heroicons/react/outline"
import HeaderItem from './HeaderItem';

export default function Header() {
  
  return (
    <header className='flex flex-col sm:flex-row items-center justify-between m-5 h-auto  '>
        <div className='flex flex-grow justify-evenly max-w-2xl '>
          <HeaderItem  Icon={HomeIcon} title="Home"/>
          <HeaderItem  Icon={LightningBoltIcon} title="TRENDING"/>
          <HeaderItem  Icon={BadgeCheckIcon} title="VERIFIED"/>
          <HeaderItem  Icon={CollectionIcon} title="COLLECTIONS"/>
          <HeaderItem  Icon={SearchIcon} title="SEARCH"/>
          <HeaderItem  Icon={UserIcon} title="ACCOUNT"/>
        </div>
        <div className='flex gap-4 '>
            <div className='text-4xl font-bold font-serif'>hulu</div>
        </div>
    </header>
  )
}
