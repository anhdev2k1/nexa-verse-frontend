import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <Avatar className='w-[80px] h-[80px] rounded-[50%] absolute top-[60%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-primary-foreground z-10'>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='w-full h-[80px] bg-background/30 backdrop-blur supports-[backdrop-filter]:bg-background/20 absolute bottom-0 left-0 flex items-center justify-between rounded-tl-xl rounded-tr-xl rounded-bl-lg rounded-br-lg'>
        <div className='flex flex-col gap-1 m-2'>
          <h3 className='text-sm font-semibold text-white'>{workspace_name}</h3>
          <div className='flex items-center gap-1 text-white'>
            <FontAwesomeIcon icon={faUser} className='text-[10px]' />
            <p className='text-[10px] '>{user_mention}</p>
          </div>
          <div className='flex items-center gap-1 text-white'>
            <FontAwesomeIcon icon={faLock} className='text-[10px]'/>
            <p className='text-[10px]'>Private</p>
          </div>
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
