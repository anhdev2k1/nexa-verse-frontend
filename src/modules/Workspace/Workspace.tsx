import WorkspaceItem from '~/components/WorkspaceItem'

const Workspace = () => {
  return (
    <div className='w-full h-full flex gap-5 flex-wrap mt-5'>
      {Array.from({ length: 6 }).map((workspace, index) => {
        return <WorkspaceItem workspace_name={`Workspace-${index}`} user_mention='@anhdev' key={index} path={index} />
      })}
    </div>
  )
}

export default Workspace
