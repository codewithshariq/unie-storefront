import Link from "next/link";
import React from "react";
import LogoPoweredBy from "@/public/logos/logo-poweredby-brown.svg?url";
import LogoBrown from "@/public/logos/logo-brown.svg?url";
import SearchIcon from "@/public/icons/tabler-icon-search.svg";
import UserIcon from "@/public/icons/tabler-icon-user.svg";
import CartIcon from "@/public/icons/tabler-icon-shopping-cart.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex px-8 mt-10">
      <nav className="flex flex-1 items-center pt-4 pb-6 justify-between">
        <Link href="/">
          <Image src={LogoBrown} alt="Logo" width={96} height={24} />
        </Link>
        <div className="inline-flex items-center gap-[71px] uppercase font-spaceGrotesk text-sm text-white-500">
          <Image src={LogoPoweredBy} alt="Logo" width={98} height={31.194} />
          <Link href="#">Collection</Link>
          <Link href="#">Explore</Link>
          <Link href="#">About</Link>
        </div>
        <div className="inline-flex items-center gap-4">
          <SearchIcon className="w-4 h-4 cursor-pointer" />
          <UserIcon className="w-4 h-4 cursor-pointer" />
          <CartIcon className="w-4 h-4 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}
