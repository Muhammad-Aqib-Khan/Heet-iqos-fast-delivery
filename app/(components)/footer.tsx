'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Truck, 
  RotateCcw, 
  Shield, 
  Package,
  Store,
  HelpCircle,
  Users
} from 'lucide-react';

const FooterSection = ({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ComponentType<any>;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center md:block md:cursor-default group"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-red-500" />}
          <span className="font-bold text-black uppercase text-sm md:text-base">{title}</span>
        </div>
        <ChevronRight
          className={`md:hidden transition-transform duration-200 w-4 h-4 ${
            open ? 'rotate-90' : ''
          }`}
        />
      </button>
      <div
        className={`mt-2 md:mt-0 transition-all duration-300 ease-in-out ${
          open ? 'block opacity-100 max-h-96' : 'hidden opacity-0 max-h-0'
        } md:block md:opacity-100 md:max-h-none text-sm text-gray-700`}
      >
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  const productLinks = [
    { label: 'IQOS TEREA KAZAKHSTAN', href: '/products/terea-kazakhstan' },
    { label: 'IQOS TEREA INDONESIA', href: '/products/terea-indonesia' },
    { label: 'IQOS HEETS', href: '/products/heets' },
    { label: 'IQOS ILUMA PRIME KIT', href: '/products/iluma-prime' },
    { label: 'IQOS ILUMA KIT', href: '/products/iluma' },
    { label: 'LAMBDA I8 (TEREA)', href: '/products/lambda-i8' },
    { label: 'IQOS ILUMA ONE KIT', href: '/products/iluma-one' },
    { label: 'IQOS ORIGINALS DUO', href: '/products/originals-duo' },
    { label: 'IQOS ORIGINALS ONE', href: '/products/originals-one' },
    { label: 'IQOS LIL SOLID EZ', href: '/products/lil-solid-ez' },
    { label: 'IQOS LIL SOLID 2.0', href: '/products/lil-solid-2' },
    { label: 'LAMBDA CC (HEETS)', href: '/products/lambda-cc' },
  ];

  const shopLinks = [
    { label: 'IQOS DUBAI UAE', href: '/shop/dubai-uae' },
    { label: 'IQOS HEETS', href: '/shop/heets' },
    { label: 'IQOS TEREA', href: '/shop/terea' },
    { label: 'IQOS ILUMA KITS', href: '/shop/iluma-kits' },
    { label: 'IQOS ORIGINALS DUO', href: '/shop/originals-duo' },
    { label: 'IQOS ORIGINALS ONE', href: '/shop/originals-one' },
  ];

  const supportLinks = [
    { label: 'Shipping & Delivery', href: '/support/shipping' },
    { label: 'Refund Policy', href: '/support/refund' },
    { label: 'Terms of Use', href: '/support/terms' },
    { label: 'Privacy Policy', href: '/support/privacy' },
    { label: 'Contact', href: '/support/contact' },
  ];

  return (
    <footer className="bg-white border-t text-gray-700">
      {/* Highlight Bar */}
      <div className="bg-red-400 text-white p-4 sm:p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm text-center">
            <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors">
              <Truck className="w-6 h-6 sm:w-8 sm:h-8" />
              <div>
                <p className="font-bold text-sm sm:text-base">FREE DELIVERY</p>
                <p className="text-xs sm:text-sm opacity-90">AED 280+ ORDERS</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors">
              <RotateCcw className="w-6 h-6 sm:w-8 sm:h-8" />
              <div>
                <p className="font-bold text-sm sm:text-base">RETURN POLICY</p>
                <p className="text-xs sm:text-sm opacity-90">2 DAYS REPLACEMENT ON DEVICES ONLY</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors sm:col-span-2 lg:col-span-1">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
              <div>
                <p className="font-bold text-sm sm:text-base">GUARANTEE</p>
                <p className="text-xs sm:text-sm opacity-90">100% GENUINE PRODUCT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Sections */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
          <FooterSection title="Products" icon={Package}>
            <ul className="space-y-1">
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className="hover:text-red-500 hover:underline transition-colors duration-200 block py-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="IQOS Shop" icon={Store}>
            <ul className="space-y-1">
              {shopLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className="hover:text-red-500 hover:underline transition-colors duration-200 block py-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Support" icon={HelpCircle}>
            <ul className="space-y-1">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className="hover:text-red-500 hover:underline transition-colors duration-200 block py-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <FooterSection title="Connect with Us" icon={Users}>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-1">Email:</p>
                  <a 
                    href="mailto:info@iqosheet-uae.ae" 
                    className="text-red-500 hover:text-red-600 transition-colors break-all"
                  >
                    info@iqosheet-uae.ae
                  </a>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-1">Hours:</p>
                  <p className="text-gray-600">Sun–Sat 11AM–10PM</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-1">Delivery:</p>
                  <p className="text-gray-600">United Arab Emirates</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-gray-800 mb-1">WhatsApp:</p>
                  <a
                    href="https://wa.me/971557163368"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors font-medium"
                  >
                    +971 55 716 3368
                  </a>
                </div>
              </div>
            </FooterSection>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs sm:text-sm text-gray-500 leading-relaxed">
            IQOS HEETS DUBAI HAVE NO AFFILIATION WITH PHILIP MORRIS INTERNATIONAL (PMI). 
            THIS IS NOT OFFICIAL WEBSITE OF PMI AND IQOS.
          </p>
        </div>
      </div>
    </footer>
  );
}