import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'

interface IWorkspaceItemProps {
  workspace_name: string
  user_mention: string
  path: number
}

const WorkspaceItem = ({ workspace_name, user_mention, path }: IWorkspaceItemProps) => {
  return (
    <Link
      to={`/workspace/${path}`}
      className='relative min-w-[280px] flex-shrink-0 flex-1 h-[200px] bg-secondary rounded-lg border border-input shadow-lg drop-shadow-lg'
    >
      <div className='w-full h-full bg-cover-workspace rounded-lg absolute top-0 left-0 bg-cover'></div>
      <Avatar className='w-[90px] h-[90px] rounded-[50%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-primary-foreground z-10'>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='w-full h-[90px] bg-background/30 backdrop-blur supports-[backdrop-filter]:bg-background/20 absolute bottom-0 left-0 flex items-center justify-between rounded-tl-xl rounded-tr-xl rounded-bl-lg rounded-br-lg'>
        <div className='flex flex-col gap-1 m-2'>
          <h3 className='text-sm font-bold text-primary'>{workspace_name}</h3>
          <p className='text-xs text-primary'>{user_mention}</p>
        </div>
        <Button variant={'default'} className='w-[70px] m-3'>
          {/* <ArrowRightIcon className='font-bold'/> */}
          Go
        </Button>
      </div>
    </Link>
  )
}

export default WorkspaceItem
