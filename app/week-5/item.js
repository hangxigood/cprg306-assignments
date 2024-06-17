
export default function Item(props) {
  return (
    <div className="flex flex-col items-left w-1/4 bg-slate-900	 p-2 m-4">
      <p className="text-lg font-bold">{props.name}</p>
      <p className="text-sm">Buy {props.quantity} in {props.category}</p>
    </div>
  );
}