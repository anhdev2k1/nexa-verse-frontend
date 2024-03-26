import { CaretLeftIcon, CaretRightIcon, DashboardIcon, GlobeIcon, RocketIcon, StarIcon } from '@radix-ui/react-icons'
import useActiveSidebar from '~/hooks/useActiveSidebar'
import useChangeSidebar from '~/hooks/useChangeSidebar'

export type SidebarMenu = {
  label: string
  icon: JSX.Element
  type: string
}

const sidebarMenuDatas: SidebarMenu[] = [
  {
    label: 'Explore',
    icon: <DashboardIcon />,
    type: 'explore'
  },
  {
    label: 'Friends',
    icon: <RocketIcon />,
    type: 'friends'
  },
  {
    label: 'Server',
    icon: <GlobeIcon />,
    type: 'server'
  },
  {
    label: 'Premium',
    icon: <StarIcon />,
    type: 'premium'
  }
]
export const SidebarMenu = () => {
  const { activeSidebar, setActiveSidebar } = useActiveSidebar('explore')
  const { typeSidebar, changeTypeSidebar } = useChangeSidebar('menu')
  return (
    <div className='w-full h-full flex flex-col gap-3 relative items-center'>
      {typeSidebar.includes('menu') ? (
        <div
          className='absolute top-0 right-[-20px] flex items-center justify-center bg-primary-foreground rounded-[50%] border border-input cursor-pointer'
          onClick={() => changeTypeSidebar('icon')}
        >
          <CaretLeftIcon width={20} height={20} />
        </div>
      ) : (
        <div
          className='absolute top-0 right-[-20px] flex items-center justify-center bg-primary-foreground rounded-[50%] border border-input cursor-pointer'
          onClick={() => changeTypeSidebar('menu')}
        >
          <CaretRightIcon width={20} height={20} />
        </div>
      )}

      {sidebarMenuDatas.map((item, index) => {
        return (
          <>
            {typeSidebar.includes('menu') ? (
              <div
                className={`flex items-center w-full h-[40px] gap-3 cursor-pointer transition-colors hover:bg-accent pl-3 rounded-lg ${activeSidebar === item.type ? 'bg-accent' : 'bg-transparent'}`}
                data-type={item.type}
                onClick={(e) => setActiveSidebar(e.currentTarget.dataset.type!)}
                key={index}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ) : (
              <div
                className={`flex items-center w-[40px] h-[40px] gap-3 cursor-pointer transition-colors hover:bg-accent pl-3 rounded-lg ${activeSidebar === item.type ? 'bg-accent' : 'bg-transparent'}`}
                data-type={item.type}
                onClick={(e) => setActiveSidebar(e.currentTarget.dataset.type!)}
                key={index}
              >
                {item.icon}
                {/* <span>{item.label}</span> */}
              </div>
            )}
          </>
        )
      })}
    </div>
  )
}
