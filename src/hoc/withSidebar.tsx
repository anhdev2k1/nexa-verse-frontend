// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withSidebar = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const EnhancedComponent: React.FC<any> = (props) => {
    return (
      <div className='w-[250px] h-full flex-shrink-0 pt-5 pl-2 pr-2'>
        <Component {...props} />
      </div>
    )
  }

  return EnhancedComponent
}
export default withSidebar
