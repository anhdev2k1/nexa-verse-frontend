import { Outlet } from 'react-router-dom'
import Navbar from '~/components/Navbar'
import { SidebarInfo, SidebarMenu } from '~/components/Sidebar'
import withSidebar from '~/hoc/withSidebar'
const SidebarLeft = withSidebar(SidebarMenu)
const SidebarRight = withSidebar(SidebarInfo)

const ApplicationLayout = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col pl-3 pr-3'>
      <Navbar />
      <div className='flex-1 h-[90vh] flex'>
        <SidebarLeft />
        <div className='h-full flex-1 flex flex-col'>
          <Outlet />
        </div>
        <SidebarRight />
      </div>
    </div>
  )
}

export default ApplicationLayout
