// components/Navbar.js
'use client';

import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-white drop-shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href={'/'} className="text-2xl font-bold text-blue-600">MyProject</Link>
          <div className="space-x-4">
            {/* <Link href="/"> */}
              {/* <span className="text-gray-700 hover:text-blue-500 cursor-pointer">Home</span> */}
            {/* </Link> */}
            <Link href="/about">
              <span className="text-gray-700 hover:text-blue-500 cursor-pointer">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 hover:text-blue-500 cursor-pointer">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
