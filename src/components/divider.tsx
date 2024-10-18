interface dividerInterface{
    imgString: string
}

export default function Divider({imgString}:dividerInterface) {
  return (
    <div className="flex flex-row mt-12 items-center justify-center w-screen h-10">
      <div className="border border-zinc-100 w-24 h-0 items-center justify-center" />

      <div className="flex items-center justify-center ml-2">
        <img src={imgString} alt=""/>
      </div>

      <div className="border border-zinc-100 w-24 h-0 items-center justify-center ml-2" />
    </div>
  );
}
