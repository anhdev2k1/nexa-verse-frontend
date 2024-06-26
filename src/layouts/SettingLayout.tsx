import { Outlet } from 'react-router-dom'
import SidebarSetting from '~/components/SidebarSetting'
import { Separator } from '~/components/ui/separator'

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/settings/profile'
  },
  {
    title: 'Account',
    href: '/settings/account'
  },
  {
    title: 'Appearance',
    href: '/settings/appearance'
  },

  {
    title: 'Display',
    href: '/settings/display'
  }
]
const SettingLayout = () => {
  return (
    <>
      <div className='hidden space-y-6 p-10 pb-16 md:block'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Settings</h2>
          <p className='text-muted-foreground'>Manage your account settings and set e-mail preferences.</p>
        </div>
        <Separator className='my-6' />
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 '>
          <aside className='-mx-4 lg:w-1/5'>
            <SidebarSetting items={sidebarNavItems} />
          </aside>
          <div className='flex-1 lg:max-w-3xl'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingLayout
