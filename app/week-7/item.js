export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div className="flex flex-col items-left w-1/2 bg-slate-900 p-2 m-4 cursor-pointer"
         onClick={() => onSelect(name)}>
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm">Buy {quantity} in {category}</p>
    </div>
  );
}
