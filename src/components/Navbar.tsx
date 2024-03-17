import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'

const Navbar = () => {
  return (
    <div className='w-full h-[50px] bg-blur backdrop-blur-[10px] flex justify-center items-center relative z-10'>
      <div className='w-[60%] h-[35px] flex items-center border border-solid border-primary rounded-md'>
        <input
          type='text'
          className='flex-1 bg-transparent text-[15px] placeholder-[#c7c1c14b] text-white outline-none border-none indent-2'
          placeholder='Explore'
        />
        <div className='w-[35px] h-[35px] flex items-center justify-center'>
          <MagnifyingGlassIcon className='w-4 h-4 text-white' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
