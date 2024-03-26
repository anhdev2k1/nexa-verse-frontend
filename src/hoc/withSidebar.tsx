import useChangeSidebar from '~/hooks/useChangeSidebar'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withSidebar = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const EnhancedComponent: React.FC<any> = (props) => {
    const { typeSidebar } = useChangeSidebar('menu')
    return (
      <div
        className={`${typeSidebar.includes('menu') ? 'w-[230px]' : 'w-[80px]'} h-full flex-shrink-0 pt-5 pl-2 pr-2 border-r border-input`}
      >
        <Component {...props} />
      </div>
    )
  }

  return EnhancedComponent
}
export default withSidebar
