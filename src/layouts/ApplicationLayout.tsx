import { Outlet } from 'react-router-dom'
import Navbar from '~/components/Navbar'
import { SidebarInfo, SidebarMenu } from '~/components/Sidebar'
import withSidebar from '~/hoc/withSidebar'
const SidebarLeft = withSidebar(SidebarMenu)
const SidebarRight = withSidebar(SidebarInfo)

const ApplicationLayout = () => {
  return (
    <div className='w-full h-[100vh] flex items-center relative bg-main-overlay bg-no-repeat bg-cover'>

      <SidebarLeft />
      <div className='h-full flex-1 flex flex-col'>
        <Navbar />
        <Outlet />
      </div>
      <SidebarRight />
    </div>
  )
}

export default ApplicationLayout
