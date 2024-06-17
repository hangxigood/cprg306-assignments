import ItemList from './item-list.js';

export default function Page() {
  return (
    <main>
      <p className='text-2xl font-bold'>Shopping List</p>
      <ItemList />
    </main>
  );
}