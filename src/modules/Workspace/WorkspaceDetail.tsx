import { DiscordLogoIcon, DrawingPinIcon, GearIcon } from '@radix-ui/react-icons'
import { useParams } from 'react-router-dom'

const WorkspaceDetail = () => {
  const { workspace_id } = useParams()
  return (
    <div>
      <div className='w-full min-h-[50px] flex items-center justify-between bg-accent rounded-lg p-2'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-bold text-lg'>#Workspace {workspace_id}</h3>
          <p className='text-sm'>Let's talk about NFTs</p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-primary-foreground cursor-pointer'>
            <DrawingPinIcon width={20} height={20} />
          </div>
          <div className='w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-primary-foreground cursor-pointer'>
            <DrawingPinIcon width={20} height={20} />
          </div>
          <div className='w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-primary-foreground cursor-pointer'>
            <DiscordLogoIcon width={20} height={20} />
          </div>
          <div className='w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-primary-foreground cursor-pointer'>
            <GearIcon width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceDetail
