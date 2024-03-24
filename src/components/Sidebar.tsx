import { DashboardIcon, GlobeIcon, RocketIcon, StarIcon } from '@radix-ui/react-icons'
import useActiveSidebar from '~/hooks/useActiveSidebar'

export type SidebarMenu = {
  label: string
  icon: JSX.Element
  type: string
}
export const SidebarInfo = () => {
  return <div className='w-full h-[100%]'></div>
}

const sidebarMenuDatas: SidebarMenu[] = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon />,
    type: 'dashboard'
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
  const { activeSidebar, setActiveSidebar } = useActiveSidebar('dashboard')
  return (
    <div className='w-full h-full flex flex-col gap-3'>
      {sidebarMenuDatas.map((item) => {
        return (
          <div
            className={`flex items-center w-full h-[40px] gap-3 cursor-pointer transition-colors hover:bg-accent pl-3 rounded-lg ${activeSidebar === item.type ? 'bg-accent' : 'bg-transparent'}`}
            data-type={item.type}
            onClick={(e) => setActiveSidebar(e.currentTarget.dataset.type!)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}
