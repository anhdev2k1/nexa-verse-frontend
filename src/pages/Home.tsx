import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'

const Home = () => {
  return (
    <div className='pl-5 pt-5'>
      <div>
        <h3 className='text-2xl font-bold'>Select A Server</h3>
      </div>
      <div className='w-full h-full flex gap-5 flex-wrap mt-5'>
        <div className='relative min-w[280px] flex-shrink-0 flex-1 h-[200px] bg-secondary rounded-lg border border-input p-3'>
          <Avatar className='w-[90px] h-[90px] rounded-[50%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-primary-foreground z-10 border border-input'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='w-full h-[90px] bg-primary absolute bottom-0 left-0 flex items-center justify-between rounded-tl-xl rounded-tr-xl rounded-bl-lg rounded-br-lg'>
            <div className='flex flex-col gap-1 m-1'>
              <h3 className='text-sm font-bold text-secondary'>Music Relax</h3>
              <p className='text-xs text-secondary'>@anhdev</p>
            </div>
            <Button variant={'outline'} className='w-[70px] m-1'>
              Go
            </Button>
          </div>
        </div>
        <div className='relative min-w[280px] flex-shrink-0 flex-1 h-[200px] bg-secondary rounded-lg border border-input p-3'>
          <Avatar className='w-[90px] h-[90px] rounded-[50%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-primary-foreground z-10 border border-input'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='w-full h-[90px] bg-primary absolute bottom-0 left-0 flex items-center justify-between rounded-tl-xl rounded-tr-xl rounded-bl-lg rounded-br-lg'>
            <div className='flex flex-col gap-1 m-1'>
              <h3 className='text-sm font-bold text-secondary'>Music Relax</h3>
              <p className='text-xs text-secondary'>@anhdev</p>
            </div>
            <Button variant={'outline'} className='w-[70px] m-1'>
              Go
            </Button>
          </div>
        </div>
        <div className='relative min-w[280px] flex-shrink-0 flex-1 h-[200px] bg-secondary rounded-lg border border-input p-3'>
          <Avatar className='w-[90px] h-[90px] rounded-[50%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-primary-foreground z-10 border border-input'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='w-full h-[90px] bg-primary absolute bottom-0 left-0 flex items-center justify-between rounded-tl-xl rounded-tr-xl rounded-bl-lg rounded-br-lg'>
            <div className='flex flex-col gap-1 m-1'>
              <h3 className='text-sm font-bold text-secondary'>Music Relax</h3>
              <p className='text-xs text-secondary'>@anhdev</p>
            </div>
            <Button variant={'outline'} className='w-[70px] m-1'>
              Go
            </Button>
          </div>
        </div>
        <div className='relative min-w[280px] flex-shrink-0 flex-1 h-[200px] bg-secondary rounded-lg border border-input p-3'>
          <Avatar className='w-[90px] h-[90px] rounded-[50%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-primary-foreground z-10 border border-input'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='w-full h-[90px] bg-primary absolute bottom-0 left-0 flex items-center justify-between rounded-tl-xl rounded-tr-xl rounded-bl-lg rounded-br-lg'>
            <div className='flex flex-col gap-1 m-1'>
              <h3 className='text-sm font-bold text-secondary'>Music Relax</h3>
              <p className='text-xs text-secondary'>@anhdev</p>
            </div>
            <Button variant={'outline'} className='w-[70px] m-1'>
              Go
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
