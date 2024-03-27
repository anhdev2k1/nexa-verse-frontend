import { useSidebar } from '~/contexts/sidebar-provider'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withSidebar = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const EnhancedComponent: React.FC<any> = (props) => {
    const { typeSidebar } = useSidebar()
    return (
      <div
        className={`${typeSidebar.includes('menu') ? 'w-[230px]' : 'w-[80px]'}  transition-all h-full flex-shrink-0 pt-5 pl-2 pr-2 border-r border-input`}
      >
        <Component {...props} />
      </div>
    )
  }

  return EnhancedComponent
}
export default withSidebar
