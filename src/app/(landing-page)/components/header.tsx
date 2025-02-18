import Link from "next/link";
import React from "react";
import PoweredByLogo from "@/assets/logos/poweredby-brown-500.png";
import NameOnlyLogo from "@/assets/logos/logo-brown-500.png";
import Image from "next/image";
import SearchIcon from "@/assets/icons/tabler-icon-search.svg";
import UserIcon from "@/assets/icons/tabler-icon-user.svg";
import CartIcon from "@/assets/icons/tabler-icon-shopping-cart.svg";

export default function Header() {
  return (
    <header className="flex px-8 pt-10 bg-black-700 bg-[url('/images/container-bg.png')] bg-repeat bg-blend-soft-light">
      <nav className="flex flex-1 items-center pt-4 pb-6 justify-between">
        <Link href="/">
          <Image src={NameOnlyLogo} alt="logo" width={96} height={24} />
        </Link>
        <div className="inline-flex items-center gap-[71px] uppercase font-spaceGrotesk text-sm text-white-500">
          <Image src={PoweredByLogo} alt="logo" width={97} height={32} />
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
