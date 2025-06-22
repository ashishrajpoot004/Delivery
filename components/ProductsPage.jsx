'use client';

import { products } from '@/data/data';
import Image from 'next/image';

export default function ProductsPage() {
  return (
    <main className="p-8 min-h-screen w-[90%] text-center justify-center align-center">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.title}
                fill // Makes image cover the container
                className="object-cover rounded-t-xl"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       25vw"
              />
            </div>

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold truncate">{product.title}</h2>
              <p className="text-sm text-gray-500">
                {product.brand} • {product.category}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-base">₹{product.price}</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  {product.discount} off
                </span>
              </div>
              <div className="text-yellow-500 text-sm">
                ⭐ {product.rating}{' '}
                <span className="text-gray-400">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
