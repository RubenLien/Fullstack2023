import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
       <h1 className="text-4xl mb-4">Todo List</h1>
        <Link legacyBehavior href="/todos">
         <button className="bg-blue-500 text-white px-8 py-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition duration-200 ease-in-out">
          Go to Todo List
         </button>
        </Link>
      </div>
    </div>
  );
}
