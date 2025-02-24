import Link from "next/link";
import React from "react";
import LogoPoweredBy from "@/public/logos/logo-poweredby-brown.svg";
import LogoBrown from "@/public/logos/logo-brown.svg";
import SearchIcon from "@/public/icons/tabler-icon-search.svg";
import UserIcon from "@/public/icons/tabler-icon-user.svg";
import CartIcon from "@/public/icons/tabler-icon-shopping-cart.svg";

export default function Header() {
  return (
    <header className="flex px-8 mt-10">
      <nav className="flex flex-1 items-center pt-4 pb-6 justify-between">
        <Link href="/">
          <LogoBrown className="w-[96px] h-6" />
        </Link>
        <div className="inline-flex items-center gap-[71px] uppercase font-spaceGrotesk text-sm text-white-500">
          <LogoPoweredBy className="h-[31.194px] w-[98px]" />
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
