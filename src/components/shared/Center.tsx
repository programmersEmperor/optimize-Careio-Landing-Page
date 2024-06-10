interface Props {
    children: any;
}

export default function Center({children}: Props){
    return <div className="flex justify-center items-center h-full w-full text-center">
    {children}
  </div>
}