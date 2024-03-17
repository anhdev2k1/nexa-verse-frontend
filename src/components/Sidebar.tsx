/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BellIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  HomeIcon,
  MusicalNoteIcon,
  PuzzlePieceIcon,
  Square2StackIcon
} from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'

export const SidebarInfo = () => {
  return (
    <div className='w-full h-[100%]'>
      <div className='w-full h-[50px] flex items-center pl-3 pr-3 justify-between'>
        <CreditCardIcon className='w-4 h-4 text-white cursor-pointer'/>
        <BellIcon className='w-4 h-4 text-white cursor-pointer' />
        <ChatBubbleLeftIcon className='w-4 h-4 text-white cursor-pointer' />
        <Cog6ToothIcon className='w-4 h-4 text-white cursor-pointer' />
      </div>
    </div>
  )
}

const sidebarDatas = [
  {
    label: 'Home',
    path: '#',
    icon: <HomeIcon className='w-5 h-5 text-white indent-2 group-hover:text-[#333]' />
  },
  {
    label: 'Music',
    path: '#',
    icon: <MusicalNoteIcon className='w-5 h-5 text-white indent-2 group-hover:text-[#333]' />
  },
  {
    label: 'Gaming',
    path: '#',
    icon: <PuzzlePieceIcon className='w-5 h-5 text-white indent-2 group-hover:text-[#333]' />
  },
  {
    label: 'Education',
    path: '#',
    icon: <Square2StackIcon className='w-5 h-5 text-white indent-2 group-hover:text-[#333]' />
  }
]
export const SidebarMenu = () => {
  return (
    <div className='w-full h-[100%]'>
      <div className='w-full h-[50px] flex items-center pl-3'>
        <h3 className=' text-xl font-semibold text-white'>Explore</h3>
      </div>

      <div className='flex flex-col gap-5 mt-5 p-3'>
        {sidebarDatas.map((item: any, index: number) => {
          return (
            <Link
              to={item.path}
              className='h-[40px] flex items-center gap-1 rounded-md hover:bg-white hover:text-[#333] group pl-2'
              key={index}
            >
              {item.icon}
              <span className='text-[16px] text-white font-medium group-hover:text-[#333]'>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
