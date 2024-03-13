import { HomeIcon, MusicalNoteIcon,  PuzzlePieceIcon, Square2StackIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'

export const SidebarInfo = () => {
  return (
    <div>
      <span>This is Sidebar Info</span>
    </div>
  )
}

export const SidebarMenu = () => {
  return (
    <div className='w-full h-[100%]'>
      <div className='w-full h-[50px] flex items-center pl-3'>
        <h3 className=' text-xl font-semibold text-white'>Explore</h3>
      </div>

      <div className='flex flex-col gap-5 mt-5 p-3'>
        <Link to='#' className='h-[40px] flex items-center gap-1 rounded-md hover:bg-white hover:text-[#333]'>
          <HomeIcon className='w-5 h-5 text-white indent-2 ' />
          <span className='text-[16px] text-white font-medium'>Home</span>
        </Link>

        <Link to='#' className='h-[40px] flex items-center gap-1 rounded-md hover:bg-white hover:text-[#333]'>
          <MusicalNoteIcon className='w-5 h-5 text-white indent-2' />
          <span className='text-[16px] text-white font-medium'>Music</span>
        </Link>

        <Link to='#' className='h-[40px] flex items-center gap-1 rounded-md hover:bg-white hover:text-[#333]'>
          <PuzzlePieceIcon className='w-5 h-5 text-white indent-2' />
          <span className='text-[16px] text-white font-medium'>Gaming</span>
        </Link>

        <Link to='#' className='h-[40px] flex items-center gap-1 rounded-md hover:bg-white hover:text-[#333]'>
          <Square2StackIcon className='w-5 h-5 text-white indent-2' />
          <span className='text-[16px] text-white font-medium'>Education</span>
        </Link>
      </div>
    </div>
  )
}
