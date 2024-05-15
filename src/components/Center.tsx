
type Props = {children:any}

const Center = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-full w-full text-center">
    {props.children}
  </div>
  )
}

export default Center