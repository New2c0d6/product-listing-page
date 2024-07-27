import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 text-center px-0">
        <div className='container flex justify-between'>
            <h1 className="text-2xl font-bold">Fatelogic</h1>
            <nav className="mt-2">
                <a className="mx-2 text-gray-700 hover:underline" href="#">Home</a>
                <a className="mx-2 text-gray-700 hover:underline" href="#">Pages</a>
                <a className="mx-2 text-gray-700 hover:underline" href="#">Shop</a>
                <a className="mx-2 text-gray-700 hover:underline" href="#">Blog</a>
            </nav>
        </div>
    </header>
  );
};

export default Header;