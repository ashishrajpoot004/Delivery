// components/Hero.js
'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shop Smarter, Not Harder
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Discover amazing deals and shop your favorite items online with ease and security.
          </p>
          <Link href="/shop">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Start Shopping
            </button>
          </Link>
        </div> */}

        <div className="flex-1 flex justify-center">
          <div className="w-[90%] h-[300px] relative">
            <Image
              src="/hero.jpg"
              alt="Online Shopping"
              fill
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
