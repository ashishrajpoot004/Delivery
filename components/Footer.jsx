// components/Footer.js
'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-2">ABOUT</h3>
          <ul className="space-y-1">
            <li><Link href="#"><span className="hover:underline">Contact Us</span></Link></li>
            <li><Link href="#"><span className="hover:underline">About Us</span></Link></li>
            <li><Link href="#"><span className="hover:underline">Careers</span></Link></li>
            <li><Link href="#"><span className="hover:underline">Press</span></Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-2">HELP</h3>
          <ul className="space-y-1">
            <li><Link href="#"><span className="hover:underline">Payments</span></Link></li>
            <li><Link href="#"><span className="hover:underline">Shipping</span></Link></li>
            <li><Link href="#"><span className="hover:underline">Cancellation</span></Link></li>
            <li><Link href="#"><span className="hover:underline">FAQ</span></Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-2">POLICY</h3>
          <ul className="space-y-1">
            <li><Link href="#"><span className="hover:underline">Return Policy</span></Link></li>
            <li><Link href="#"><span className="hover:underline">Terms of Use</span></Link></li>
            <li><Link href="#"><span className="hover:underline">Security</span></Link></li>
            <li><Link href="#"><span className="hover:underline">Privacy</span></Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-2">SOCIAL</h3>
          <ul className="space-y-1">
            <li><Link href="#"><span className="hover:underline">Facebook</span></Link></li>
            <li><Link href="#"><span className="hover:underline">Twitter</span></Link></li>
            <li><Link href="#"><span className="hover:underline">YouTube</span></Link></li>
            <li><Link href="#"><span className="hover:underline">Instagram</span></Link></li>
          </ul>
        </div>

        {/* Column 5 - Address */}
        <div className="col-span-2">
          <h3 className="text-white font-semibold mb-2">Mail Us:</h3>
          <p className="text-gray-400">
            MyProject Pvt Ltd, 123, Main Street,<br />
            Bangalore, Karnataka - 560001, India
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} MyProject. All rights reserved.
      </div>
    </footer>
  );
};
