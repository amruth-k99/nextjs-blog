import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex justify-between w-full p-6">
      <div className="flex items-center">
        <Link href={'/'}>
          <div className="text-2xl md:text-4xl cursor-pointer font-bold">
            Amruth&apos;s Blog
          </div>
        </Link>
      </div>
      <div className="my-auto">
        Amruth&apos;s Blog &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
