// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withSidebar = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const EnhancedComponent: React.FC<any> = (props) => {
    return (
      <div className='w-[250px] h-[100vh] border border-b border-primary backdrop-blur-[5px] bg-bg-blur'>
        <Component {...props} />
      </div>
    )
  }

  return EnhancedComponent
}
export default withSidebar
