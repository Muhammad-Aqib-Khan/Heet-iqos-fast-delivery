"use client";

import Link from "next/link";
import { useCart } from "../CartContext"; // ✅ adjust path if needed

const Navbar = () => {
  const { cart } = useCart(); // ✅ useCart from context

  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  const menuItems = {
    "IQOS HEETS": [
      { name: "HEETS CLASSICS", href: "/item-1" },
      { name: "IQOS ORIGNALS DUO", href: "/item-2" },
      { name: "IQOS ORIGNALS ONE", href: "/item-3" },
      { name: "IQOS LIL SOLID EZ", href: "/item-1" },
      { name: "IQOS LIL SOLID 2.0", href: "/item-2" },
      { name: "LAMBDA CC", href: "/item-3" },
    ],
    "IQOS Terea ": [
      { name: "IQOS KAZAKISTAN", href: "/IqosKazakhstan" },
      { name: "IQOS INDONESIA", href: "/option-b" },
    ],
    "IQOS ILUMA": [
      { name: "IQOS ILUMA KIT", href: "/choice-x" },
      { name: "IQOS ILUMA PRIME KIT", href: "/choice-y" },
      { name: "IQOS ILUMA ONE", href: "/choice-z" },
      { name: "LAMBDA I8", href: "/choice-z" },
    ],
  };

  return (
    <nav className="bg-white shadow-md px-4 md:px-8 py-3 text-sm">
      <div className="flex items-center justify-between flex-wrap">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <div className="text-red-600 font-semibold text-base md:text-lg flex items-center">
            <span className="mr-1">❤️</span>
            IQOS HEETS DUBAI
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {Object.entries(menuItems).map(([title, items]) => (
            <div key={title} className="relative group">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none text-sm px-2 py-1">
                {title} ▼
              </button>
              <div className="absolute hidden group-hover:block z-10 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-3 py-1.5 text-gray-700 hover:bg-gray-100 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Shopping Cart */}
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <Link href="/cart" className="flex items-center text-sm hover:underline">
            <span className="text-gray-700">🛒 SHOPPING CART</span>
            <span className="ml-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
            <span className="ml-2 text-gray-700">
              DhS. {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-4 space-y-2">
        {Object.entries(menuItems).map(([title, items]) => (
          <div key={title} className="border border-gray-200 rounded-md shadow-sm">
            <div className="px-3 py-1.5 font-medium bg-gray-100 text-sm">{title}</div>
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-3 py-1.5 text-gray-700 hover:bg-gray-100 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
