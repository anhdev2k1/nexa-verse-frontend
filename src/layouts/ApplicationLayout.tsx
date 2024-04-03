import { Outlet } from 'react-router-dom'
import Navbar from '~/components/Navbar'
import { SidebarMenu } from '~/components/Sidebar'
import withSidebar from '~/hoc/withSidebar'

const SidebarLeft = withSidebar(SidebarMenu)

const ApplicationLayout = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col'>
      <Navbar />
      <div className='flex-1 h-[94vh] flex'>
        <SidebarLeft />
        <div className='h-full flex-1 flex flex-col pt-5 mr-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ApplicationLayout
