// components/SearchHeader.tsx
"use client"
import { useState } from 'react';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import Link from 'next/link';


const SearchHeader = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <div className="hidden sm:flex  justify-between items-center bg-black px-10 py-4 text-lg">
        {/* Left Section */}
        <div className="flex items-center ml-3 pl-6 space-x-4 text-white">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="font-semibold">AED</span>
            <span className="text-xs">▼</span>
          </div>

          <div className="flex items-center space-x-2">
            <span>|</span>
            <span className="cursor-pointer hover:text-red-500">SUPPORT</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-red-500">SHIPPING & DELIVERY</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-red-500">CONTACT</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 text-white">
          <div
            onClick={() => setShowSearch(!showSearch)}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <FaSearch className="text-red-500 text-xs" />
            <span>SEARCH</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <FaHeart className="text-red-500 text-xs" />
            <span>WISHLIST</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <FaUser className="text-red-500 text-xs" />
            <span>MY ACCOUNT</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="bg-white px-10 py-6 border-b border-gray-200">
          {/* Search Input */}
          <div className="flex items-center border-b-2 border-red-500 pb-1">
            <FaSearch className="text-gray-600 text-lg mr-3" />
            <input
              type="text"
              placeholder="SEARCH KEYWORD"
              className="w-full text-2xl text-gray-600 focus:outline-none placeholder-gray-500"
            />
          </div>

          {/* Popular Searches */}
              <div className="mt-4 text-sm flex flex-wrap items-center gap-x-4 gap-y-2 text-lg">
                <span className="font-semibold text-black">POPULAR SEARCHES:</span>
                <Link href="/search/iqos-3" className=" hover:text-red-500">IQOS 3</Link>
                <Link href="/search/iqos-multi" className=" hover:text-red-500">IQOS MULTI</Link>
                <Link href="/search/iqos-2-4" className="hover:text-red-500">IQOS 2.4</Link>
                <Link href="/search/heets-uae" className="hover:text-red-500">HEETS UAE</Link>
                <Link href="/search/heets-dubai" className="hover:text-red-500">HEETS DUBAI</Link>
                <Link href="/search/heets-abu-dhabi" className="hover:text-red-500">HEETS ABU DHABI</Link>
                <Link href="/search/iqos-lil" className="hover:text-red-500">IQOS LIL</Link>
                <Link href="/search/iqos-3-duo" className="hover:text-red-500">IQOS 3 DUO</Link>
              </div>
        </div>
      )}
    </div>
  );
};

export default SearchHeader;
