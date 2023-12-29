import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import PrimaryButton from "../buttons/primary";
import { bool } from "aws-sdk/clients/signer";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const [openSlider, setOpenSlider] = useState(false);
  const [isSearchFocused, toggleSearchContainer] = useState(false);
  return (
    <div className="fixed bg-white border-b border-b-gray-200 w-full top-0 mx-auto text-center">
      <div className="flex justify-between w-full px-6 py-4">
        <GiHamburgerMenu
          className="my-auto mr-3 text-2xl cursor-pointer"
          onClick={() => setOpenSlider(!openSlider)}
        />
        <div className="flex items-center">
          <Link href={"/"}>
            <div className="text-2xl cursor-pointer mx-3 font-bold">
              Amruth&apos;s Blog
            </div>
          </Link>
        </div>

        <div className="flex-1 hidden md:flex justify-end relative mr-2">
          <div className="bg-gray-50 mx-2 w-full max-w-lg search-container duration-200 transform">
            <input
              className="w-full search-input z-10 bg-gray-100 my-auto p-2 px-4 h-12 placeholder:text-gray-500 outline-none duration-150 rounded-sm max-w-lg"
              onFocus={() => toggleSearchContainer(true)}
              onBlur={() => toggleSearchContainer(false)}
              placeholder="Search for your favorite things"
            />
            {isSearchFocused && (
              <div className="bg-gray-50">
                {[1, 2, 3, 4].map((result) => (
                  <Link href="/search?q=nice">
                    <div className="border-b flex border-b-gray-400">
                      <Image
                        alt="search-image"
                        src="https://picsum.photos/400/400"
                        width={80}
                        height={80}
                        className="p-2 rounded-lg"
                      />
                      <div>
                        <p className="font-medium my-2">
                          Introduction to React Query
                        </p>

                        <p className="text-gray-500 text-sm my-2">New bois</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {router.pathname !== "/post/create" && (
            <Link href="/post/create">
              <PrimaryButton label="Sign in" loading={false} outline={false} />
            </Link>
          )}

          <div className="hidden md:block">
            <Link href="/post/create">
              <PrimaryButton label="Register" loading={false} outline />
            </Link>
          </div>
        </div>
      </div>
      <MiniHeader />
      <Slider open={openSlider} close={() => setOpenSlider(false)} />
      <div
        className={`bg-black opacity-10 absolute duration-200 h-screen ${
          openSlider ? "w-full " : "z-10 w-0 left-0"
        }`}
        onClick={() => setOpenSlider(false)}
      ></div>
    </div>
  );
};

const Slider = ({ open, close }: { open: boolean; close: any }) => {
  const contents = [
    { label: "Home" },
    { label: "Search" },
    { label: "Categories" },
    { label: "Stories" },
    { label: "Profile" },
  ];
  return (
    <div
      className={`absolute bg-gray-50 h-screen z-50 duration-300 ease-linear ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {contents.map((content) => (
        <Link onClick={() => close()} href={`/${content.label}`}>
          <div className="my-2 text-lg duration-100 font-medium px-10 pr-28 text-left hover:text-white hover:bg-gray-700 py-3">
            {content.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

const MiniHeader = () => {
  return (
    <div className="flex justify-start gap-3 ml-3 overflow-x-scroll no-scroll-view border-t">
      {[
        "News",
        "Travel",
        "Eduction",
        "Properties",
        "Properties",
        "Properties",
        "Properties",
        "Properties",
        "Properties",
        "Properties",
      ].map((item) => (
        <Link href="/category/item">
          <div className="text-sm my-2">{item}</div>
        </Link>
      ))}
    </div>
  );
};

export default Header;
